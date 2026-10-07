import { useState } from 'react';
import { categories } from '../../shared/products';
import { images } from '../../assets/images';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { categoryPath } from '../../shared/catalogMeta';
const photo = name => {
  const mapping = {'Body Parts':images.grille,'Engines & Engine Parts':images.engineCategory,'Gearboxes & Transmission':images.transmissionCategory,'Mechanical & Underneath':images.suspensionCategory,'Suspension & Steering':images.suspensionCategory,'Braking Systems':images.brakesCategory,'Electrical & Electronic':images.electricalCategory,'Interior Parts':images.interiorCategory,'Lighting':images.lightingCategory,'Cooling & AC':images.coolingCategory,'Wheels & Tyres':images.wheelsCategory,'Accessories':images.interiorCategory};
  return mapping[name] || images.workshop;
};
const groups = { 'All parts':categories, Powertrain:categories.slice(1,3), Chassis:categories.slice(3,6), Comfort:categories.slice(7,10) };
export default function PartCollections() {
  const [tab,setTab] = useState('All parts');
  const [expanded,setExpanded] = useState(false);
  return <section className="landing-collections"><p className="collection-kicker">YOUR MERCEDES. YOUR WAY.</p><h2>Explore all parts</h2><div className="collection-tabs">{Object.keys(groups).map(name=><button key={name} className={tab===name?'selected':''} onClick={()=>{setTab(name);setExpanded(false);}}>{name}</button>)}</div>
    <div id="landing-category-grid" className={`collection-grid${expanded?' categories-expanded':''}`}>{groups[tab].map(name=><a key={name} className="collection-card" href={categoryPath(name)}><img src={photo(name)} alt={name+' category reference photo'} loading="lazy"/><div><small>PARTS & ACCESSORIES</small><h3>{name}</h3><p>Find the right fit for your Mercedes-Benz.</p><span>Explore <ArrowRight size={16}/></span></div></a>)}</div>
    {groups[tab].length>3 && <button type="button" className="mobile-category-toggle" aria-expanded={expanded} aria-controls="landing-category-grid" onClick={()=>setExpanded(value=>!value)}>{expanded?'Show fewer categories':'See all categories'}<ChevronDown size={17}/></button>}
    <a className="pill dark" href="/categories">Explore all categories</a>
  </section>;
}


