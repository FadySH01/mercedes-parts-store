import { images } from '../../assets/images';
import { ArrowRight, BadgeCheck, Truck } from 'lucide-react';

export default function Hero() {
  return <section className="hero"><img src={images.workshop} alt="Automotive parts in a workshop"/><div className="hero-overlay"/><div className="hero-copy"><span className="overline">Your Mercedes-Benz parts specialist</span><h1>The right part.<br/><em>Every time.</em></h1><p>Find genuine and quality-tested parts for your Mercedes-Benz. Search by model, year, category or part number.</p><a href="/shop#parts" className="hero-cta">Shop parts <ArrowRight size={16}/></a><div className="hero-assurance"><span><BadgeCheck/> Genuine & verified</span><span><Truck/> Delivery available</span></div></div><div className="hero-aside">PARTS SOURCING · ONLINE STORE</div></section>;
}

