import { useState } from 'react';
import { ArrowRight, ChevronDown, Heart, MessageCircle, Search, ShoppingBag, X } from 'lucide-react';
import { signOutUser } from '../../features/authentication/useAuthActions';
import { useAuth } from '../../features/authentication/AuthProvider';
import Brand from '../../shared/components/Brand';
import { contactHref, contactLabel } from '../../shared/contact';

export default function SiteHeader({ count, onCart, onAuth }) {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);
  return <>
    <div className="topline">Mercedes-Benz parts and sourcing support. <a href="/request-part?part=Delivery+enquiry">Ask about delivery <ArrowRight size={12}/></a></div>
    <header className="header"><button className="icon mobile-toggle" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? <X/> : '☰'}</button><Brand/>
      <nav className={menu ? 'nav nav-show' : 'nav'}><a href="/shop#parts">Shop parts <ChevronDown size={14}/></a><a href="/categories">Categories <ChevronDown size={14}/></a><a href="/request-part">Request a part</a><a href="/models">Models</a></nav>
      <div className="head-actions"><button className="icon" onClick={() => document.querySelector('#search')?.focus()} aria-label="Search"><Search/></button><button className="icon wishlist-head" onClick={() => window.location.href='/wishlist'} aria-label="Wishlist"><Heart/></button>{user ? <button className="sign-in-head" onClick={signOutUser}>{user.displayName || 'Account'} · Sign out</button> : <button className="sign-in-head" onClick={onAuth}>Sign in</button>}<button className="cart-head" onClick={onCart}><ShoppingBag size={16}/><span>Cart</span><b>{count}</b></button><a className="whatsapp-head" href={contactHref}><MessageCircle size={15}/> {contactLabel}</a></div>
    </header>
  </>;
}


