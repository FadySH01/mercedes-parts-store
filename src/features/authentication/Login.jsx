import { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import { signIn, register, signInWithGoogle } from './useAuthActions';
import { afterSignIn } from './authRedirect';
import googleLogo from '../../assets/images/google-sign-in-logo.png';

export default function AuthPage({ onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode);
  const authPath = path => `${path}?next=${encodeURIComponent(afterSignIn())}`;
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError('');
    try {
      if (mode === 'register') await register(form.get('name'), form.get('email'), form.get('password'));
      else await signIn(form.get('email'), form.get('password'));
      onClose();
    } catch (reason) {
      setError(reason.message || 'Could not complete sign in.');
    } finally {
      setBusy(false);
    }
  }

  async function googleLogin() {
    setBusy(true); setError('');
    try { await signInWithGoogle(); onClose(); }
    catch (reason) { setError(reason.code === 'auth/popup-closed-by-user' ? 'Sign-in cancelled. Please try again.' : reason.message || 'Google sign-in could not complete.'); }
    finally { setBusy(false); }
  }

  if (mode === 'reset') return <ForgotPassword onBack={() => setMode('signin')}/>;
  return <div className="feature-form-wrap">
    <h2>{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h2>
    <p>{mode === 'signin' ? 'Sign in with your email and password.' : 'Save parts and keep your orders together.'}</p>
    <form onSubmit={submit} className="feature-form">
      {mode === 'register' && <label>Your name<input name="name" autoComplete="name" required/></label>}
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
      <label>Password<input name="password" type="password" placeholder="Enter your password" minLength={mode==='register'?6:undefined} autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} required/></label>
      <button disabled={busy}>{busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}</button>
    </form>
    {error && <p role="alert" className="form-error">{error}</p>}
    <div className="auth-links"><a href={authPath(mode==='signin'?'/register':'/login')}>{mode==='signin'?'Create account':'Sign in'}</a><a href={authPath('/forgot-password')}>Forgot password?</a></div>
    <div className="auth-divider"><span>or</span></div>
    <button type="button" className="google-login" disabled={busy} onClick={googleLogin}><img src={googleLogo} alt="" aria-hidden="true"/>Sign in with Google</button>
  </div>;
}

