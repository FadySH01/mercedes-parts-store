import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

function cartRef(uid) {
  if (!db) throw new Error('Firebase is not configured yet.');
  return doc(db, 'carts', uid);
}

export function listenToCart(uid, onChange, onError) {
  return onSnapshot(cartRef(uid), snapshot => {
    onChange(snapshot.exists() ? snapshot.data().items ?? [] : []);
  }, onError);
}

export async function saveCart(uid, items) {
  return setDoc(cartRef(uid), { items, updatedAt: serverTimestamp() }, { merge: true });
}
