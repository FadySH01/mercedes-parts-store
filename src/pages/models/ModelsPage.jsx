import PageLayout from '../../shared/components/PageLayout';
import { useModels } from '../../features/products/useModels';
import { modelShowcase } from '../../shared/modelShowcase';
import { slug } from '../../shared/catalogMeta';
import sedan from '../../assets/images/mercedes-benz-sedan.jpg';
import '../categories/category.css';

export default function ModelsPage() {
  const models = useModels();
  return <PageLayout title="Mercedes-Benz models"><p className="model-page-lead">Choose your Mercedes to explore body parts, engines, transmissions and every system in between.</p><div className="model-photo-grid">{models.map(name => {
    const image = modelShowcase.find(item => item.name === name)?.image || sedan;
    return <a key={name} href={`/models/${slug(name)}`}><img src={image} alt={`${name} reference vehicle`} loading="lazy"/><span>MERCEDES-BENZ</span><h2>{name}</h2><small>Explore parts ↗</small></a>;
  })}</div></PageLayout>;
}
