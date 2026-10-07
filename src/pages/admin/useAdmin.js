import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../features/authentication/AuthProvider';
import { db } from '../../lib/firebase';

export function useAdmin() {
  const { user, loading } = useAuth();
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    if (!user || !db) { setAllowed(false); setChecking(false); return; }
    setChecking(true);
    return onSnapshot(doc(db, 'admins', user.uid), snapshot => {
      setAllowed(snapshot.data()?.active === true); setChecking(false);
    }, () => { setAllowed(false); setChecking(false); });
  }, [user]);
  return { user, allowed, checking: loading || checking };
}
