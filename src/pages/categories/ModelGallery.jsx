import { modelShowcase } from '../../shared/modelShowcase';
import { slug } from '../../shared/catalogMeta';

export default function ModelGallery({ models, selected, choose }) {
  return <div className="category-model-gallery">{models.map(name => {
    const reference = modelShowcase.find(item => item.name === name);
    const content = <>{reference ? <img src={reference.image} alt={`Mercedes-Benz ${name}`} loading="lazy"/> : <div className="model-photo-pending">{name}</div>}<div><h3>{name}</h3><span>{selected ? 'Explore model ↗' : 'Select model ↗'}</span></div></>;
    return selected ? <a className="category-model-card" key={name} href={`/models/${slug(name)}`}>{content}</a> : <button className="category-model-card" key={name} onClick={() => choose(name)}>{content}</button>;
  })}</div>;
}
