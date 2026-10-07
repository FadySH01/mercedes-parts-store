import { useState } from 'react';
import { ChevronDown, Menu, UserRound, X } from 'lucide-react';
import Brand from '../../shared/components/Brand';
import { categoryPath } from '../../shared/catalogMeta';

export default function LandingHeader({ overlay = false }) {
  const [open, setOpen] = useState(false);
  return <header className={overlay ? "landing-header landing-header-overlay" : "landing-header"}><Brand/><button className="landing-mobile" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="landing-navigation">{open?<X/>:<Menu/>}</button>
    <nav id="landing-navigation" className={open?'landing-nav open':'landing-nav'}>
      <details><summary>Parts <ChevronDown size={15}/></summary><div><a href="/categories">All categories</a><a href={categoryPath('Body Parts')}>Body parts</a><a href={categoryPath('Engines & Engine Parts')}>Engines & engine parts</a><a href={categoryPath('Gearboxes & Transmission')}>Gearboxes & transmission</a><a href={categoryPath('Braking Systems')}>Braking systems</a></div></details>
      <details><summary>Shop <ChevronDown size={15}/></summary><div><a href="/shop">Search inventory</a><a href="/models">Shop by Mercedes model</a><a href="/cart">Shopping cart</a><a href="/admin">Admin workspace</a></div></details>
      <details><summary>Support & service <ChevronDown size={15}/></summary><div><a href="/request-part">Request a part</a><a href="/video-verification">Video verification</a></div></details>
      <a className="landing-account" href="/login"><UserRound size={18}/> Account</a>
    </nav>
  </header>;
}
