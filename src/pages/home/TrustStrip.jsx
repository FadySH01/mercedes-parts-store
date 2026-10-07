import { Play, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const points = [[ShieldCheck,'Genuine & quality-checked','Parts you can trust'],[Truck,'Delivery you can rely on','Across Nigeria'],[RotateCcw,'Help when you need it','Friendly parts specialists'],[Play,'See it before you buy','Video verification available']];

export default function TrustStrip() {
  return <section className="trust-strip" id="about">{points.map(([Icon,title,sub])=><div key={title}><Icon/><span><b>{title}</b><small>{sub}</small></span></div>)}</section>;
}

