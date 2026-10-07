import { useState } from 'react';
import PageLayout from '../../shared/components/PageLayout';
import PartRequestForm from '../../shared/components/PartRequestForm';
export default function RequestPage() {
  const [message,setMessage] = useState('');
  return <PageLayout title="Request a Mercedes-Benz part"><PartRequestForm onDone={setMessage}/><p role="status">{message}</p></PageLayout>;
}
