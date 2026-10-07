import PageLayout from '../../shared/components/PageLayout';
import RequestPage from './RequestPage';
export default function VideoPage() {
  return <PageLayout title="Video verification"><p>Tell us which part you want to inspect. Mention your preferred video-call time in the extra details of your request.</p><a className="pill dark" href="/request-part">Request a product check</a></PageLayout>;
}
