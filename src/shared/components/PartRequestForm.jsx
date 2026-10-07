import { useState } from 'react';
import { Plus, Send } from 'lucide-react';
import { submitPartRequest } from '../../features/requests/requestService';
import { useAuth } from '../../features/authentication/AuthProvider';
import { loginPath } from '../../features/authentication/authRedirect';

export default function PartRequestForm({ onDone }) {
  const { user, loading } = useAuth();
  const params = new URLSearchParams(location.search);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError('');
    try {
      await submitPartRequest(Object.fromEntries(form.entries()));
      event.currentTarget.reset();
      onDone('Part request sent. Our team will follow up.');
    } catch (reason) {
      setError(reason.message || 'Could not send your request. Please contact us on WhatsApp.');
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <p role="status">Loading your account…</p>;
  if (!user) return <div className="request-form"><h3>Sign in to request a part</h3><p>Your account keeps your requests together.</p><a href={loginPath(`/request-part${location.search}`)}>Sign in ↗</a></div>;
  return <form className="request-form" onSubmit={submit}>
    <h3>Request a part</h3><p>Tell us what you’re looking for.</p>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Full name"/></label><label>Year<input name="year" placeholder="e.g. 2018"/></label></div>
    <div className="form-row"><label>Model<input name="model" required defaultValue={params.get('model') || ''} placeholder="e.g. C-Class W205"/></label><label>Your phone or email<input name="phone" required placeholder="How can we reach you?"/></label></div>
    <label>Part you need<input name="part" required defaultValue={params.get('part') || ''} placeholder="Describe the part"/></label>
    <label>Part number (if known)<input name="partNumber" placeholder="e.g. A 000 421 12 12"/></label>
    <label>Extra details<textarea name="details" rows="3" placeholder="Condition preference or anything helpful"/></label>
    <label className="upload"><Plus size={16}/><span>Add a photo (coming soon)</span><input type="file" accept="image/*" disabled/></label>
    {error && <p className="form-error">{error}</p>}
    <button type="submit" className="submit-request" disabled={busy}>{busy ? 'Sending…' : 'Send part request'} <Send size={15}/></button>
    <small className="form-note">We’ll use your details only to respond to this request.</small>
  </form>;
}
