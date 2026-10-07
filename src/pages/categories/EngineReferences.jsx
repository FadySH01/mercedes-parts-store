import { images } from '../../assets/images';

const engines = [
  { name:'M156 AMG engine', image:images.m156, description:'A cutaway reference showing the internal engine assembly.' },
  { name:'M276 engine', image:images.m276, description:'A reference from a Mercedes-Benz S 400 Hybrid engine display.' },
];

export default function EngineReferences() {
  return <section><div className="category-section-heading"><span>ENGINE LIBRARY</span><h2>Know the engine. Find the part.</h2></div><p className="sourcing-note">Engine types vary by model year and trim. These reference images help explain the systems; send your engine code or VIN to confirm the exact part.</p><div className="engine-reference-grid">{engines.map(engine => <article key={engine.name}><img src={engine.image} alt={engine.name+' reference'}/><div><h3>{engine.name}</h3><p>{engine.description}</p><a href={`/request-part?part=${encodeURIComponent(engine.name+' parts')}`}>Ask about this engine ↗</a></div></article>)}</div></section>;
}
