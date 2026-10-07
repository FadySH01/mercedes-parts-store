import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseReady } from '../../lib/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(firebaseReady);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, value => {
      setUser(value);
      setLoading(false);
    });
  }, []);

  const value = useMemo(() => ({ user, loading, enabled: firebaseReady }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth must be used inside AuthProvider');
  return value;
}
