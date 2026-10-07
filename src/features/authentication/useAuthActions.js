import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../lib/firebase';

function requireFirebase() {
  if (!auth) throw new Error('Firebase is not configured yet. Add the project values to .env.local.');
  return auth;
}

export async function signIn(email, password) {
  return signInWithEmailAndPassword(requireFirebase(), email.trim(), password);
}

export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  return signInWithPopup(requireFirebase(), provider);
}

export async function register(name, email, password) {
  const result = await createUserWithEmailAndPassword(requireFirebase(), email.trim(), password);
  if (name.trim()) await updateProfile(result.user, { displayName: name.trim() });
  return result;
}

export async function signOutUser() {
  return signOut(requireFirebase());
}

export function resetPassword(email) {
  return sendPasswordResetEmail(requireFirebase(), email.trim());
}
