import { useCallback, useEffect, useState } from 'react';
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuth } from '../authentication/AuthProvider';
import { db } from '../../lib/firebase';

export function useWishlist() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
    if (!user || !db) return undefined;
    return onSnapshot(doc(db, 'wishlists', user.uid), snapshot => {
      setItems(snapshot.exists() ? snapshot.data().items ?? [] : []);
    });
  }, [user]);

  const toggle = useCallback(async id => {
    if (!user || !db) throw new Error('Sign in to save your wishlist.');
    const next = items.includes(id) ? items.filter(value => value !== id) : [...items,id];
    await setDoc(doc(db, 'wishlists', user.uid), { items:next, updatedAt:serverTimestamp() });
  }, [items,user]);

  return { items, toggle };
}
