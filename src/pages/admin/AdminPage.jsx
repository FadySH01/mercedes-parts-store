import PageLayout from '../../shared/components/PageLayout';
import { useAdmin } from './useAdmin';
import { firebaseReady } from '../../lib/firebase';
import AdminWorkspace from './AdminWorkspace';
import './admin.css';

export default function AdminPage() {
  const { user, allowed, checking } = useAdmin();
  return <PageLayout title="Admin workspace"><div className="admin-shell">
    {!firebaseReady ? <p>Connect your Firebase project to enable the admin workspace.</p>
      : checking ? <p>Checking access…</p>
      : !user ? <p>Sign in with your administrator account. <a href="/login">Sign in ↗</a></p>
      : !allowed ? <p>This account does not have administrator access.</p>
      : <AdminWorkspace/>}
  </div></PageLayout>;
}
