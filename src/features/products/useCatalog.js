import { useEffect, useState } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { products as initialProducts } from '../../shared/products';

export function useCatalog() {
  const [catalog, setCatalog] = useState(initialProducts);
  useEffect(() => {
    if (!db) return;
    return onSnapshot(collection(db, 'products'), snapshot => {
      const updates = snapshot.docs.map(item => ({ ...item.data(), id: item.id }));
      setCatalog([...initialProducts.filter(item => !updates.some(update => update.id === item.id)), ...updates]);
    });
  }, []);
  return catalog;
}


