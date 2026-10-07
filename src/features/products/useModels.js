import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { defaultModels } from '../../shared/catalogMeta';

export function useModels() {
  const [models, setModels] = useState(defaultModels);
  useEffect(() => {
    if (!db) return;
    return onSnapshot(collection(db, 'models'), snapshot => {
      setModels([...new Set([...defaultModels, ...snapshot.docs.map(doc => doc.data().name).filter(Boolean)])]);
    });
  }, []);
  return models;
}
