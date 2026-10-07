import { MessageCircle } from 'lucide-react';
import Brand from '../../shared/components/Brand';
import { contactHref } from '../../shared/contact';

export default function StoreFooter() {
  return <footer><div className="footer-main"><div className="footer-brand"><Brand/><p>Mercedes-Benz parts, sourcing and support.</p><a className="footer-wa" href={contactHref}><MessageCircle/> Contact our team</a></div><div><h4>Shop</h4><a href="/categories">All categories</a><a href="/models">Mercedes models</a><a href="/shop#parts">Browse parts</a></div><div><h4>Help & support</h4><a href="/request-part">Request a part</a><a href="/video-verification">Video verification</a><a href="/request-part?part=Delivery+enquiry">Ask about delivery</a></div><div><h4>Your account</h4><a href="/login">Your account</a><a href="/cart">Shopping cart</a><a href="/admin">Admin workspace</a></div></div><div className="footer-bottom"><span>© 2026 Everything Benz · Independent Mercedes-Benz parts sourcing</span><a href="/media-credits">Media credits</a></div></footer>;
}

