import { useCallback, useEffect, useState } from 'react';
import { listenToCart, saveCart } from './cartService';
import { useAuth } from '../authentication/AuthProvider';

export function useCart() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setItems([]);
    setError('');
    if (!user) return undefined;
    return listenToCart(user.uid, setItems, () => setError('Your cart could not be loaded.'));
  }, [user]);

  const update = useCallback(async nextItems => {
    if (!user) throw new Error('Sign in to keep your cart saved.');
    await saveCart(user.uid, nextItems);
  }, [user]);

  return { items, error, update, signedIn: Boolean(user) };
}
