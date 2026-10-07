import { ArrowRight, MessageCircle } from 'lucide-react';
import PartRequestForm from '../../shared/components/PartRequestForm';
import { contactHref, contactLabel } from '../../shared/contact';

export default function RequestSection({ onNotify }) {
  return <section className="request-section section" id="request"><div className="request-copy"><span className="eyebrow">Your parts concierge</span><h2>Looking for something<br/>we don’t have listed?</h2><p>Share a few details so the team can confirm fitment, availability, condition and pricing.</p><div className="request-benefits"><span>✓ No-obligation quote</span><span>✓ Genuine or quality alternatives</span><span>✓ Personal sourcing support</span></div><a className="contact-link" href={contactHref}><MessageCircle/><span><b>{contactLabel}</b><small>Ask about parts sourcing</small></span><ArrowRight/></a></div><PartRequestForm onDone={onNotify}/></section>;
}

