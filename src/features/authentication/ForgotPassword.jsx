import { useState } from 'react';
import { resetPassword } from './useAuthActions';

export default function ForgotPassword({ onBack }) {
  const [message, setMessage] = useState('');
  async function submit(event) {
    event.preventDefault();
    try { await resetPassword(new FormData(event.target).get('email')); setMessage('Check your email for password reset instructions.'); }
    catch { setMessage('Could not send the reset email. Please try again.'); }
  }
  return <section><h2>Forgot password?</h2><form className="feature-form" onSubmit={submit}><label>Email<input name="email" type="email" required/></label><button>Send reset email</button></form><p role="status">{message}</p><button onClick={onBack}>Back to login</button></section>;
}
