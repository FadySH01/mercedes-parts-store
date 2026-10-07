import { ArrowRight } from 'lucide-react';

export default function PromoBand() {
  return <section className="promo-band"><div><span className="eyebrow">Can’t find what you need?</span><h2>We’ll source it for you.</h2><p>Tell our parts team what you’re looking for. We’ll check availability and get back to you with a quote.</p><a className="light-cta" href="/shop#request">Request a part <ArrowRight size={15}/></a></div><div className="promo-stamp">PARTS<br/>SOURCING<br/><span>MADE SIMPLE</span></div></section>;
}

