import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';

export async function submitPartRequest(fields) {
  if (!auth?.currentUser) throw new Error('Please sign in before requesting a part.');
  if (!db) throw new Error('Part requests need Firebase setup. You can contact us on WhatsApp in the meantime.');
  const clean = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, String(value ?? '').trim()]));
  return addDoc(collection(db, 'partRequests'), { ...clean, userId: auth.currentUser.uid, createdAt: serverTimestamp() });
}
