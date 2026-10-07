import PageLayout from '../../shared/components/PageLayout';
import { categories } from '../../shared/products';
import { categoryPath, slug } from '../../shared/catalogMeta';
import { modelShowcase } from '../../shared/modelShowcase';
import { useModels } from '../../features/products/useModels';
import sedan from '../../assets/images/mercedes-benz-sedan.jpg';
import '../categories/category.css';

export default function ModelPage() {
  const models = useModels();
  const model = models.find(name => slug(name) === location.pathname.split('/')[2]);
  if (!model) return <PageLayout title="Model not found"><a href="/models">Explore models ↗</a></PageLayout>;
  const image = modelShowcase.find(item => item.name === model)?.image || sedan;
  return <PageLayout title={`${model} parts`}><div className="category-intro"><div><span className="category-eyebrow">MERCEDES-BENZ MODEL LIBRARY</span><p>Explore the part categories for your {model}. Choose a system, then share your year and trim so we can confirm the correct fit.</p><a href="/request-part">Request a specific part ↗</a></div><img src={image} alt={`${model} reference vehicle`}/></div><div className="category-section-heading"><span>PARTS BY SYSTEM</span><h2>Explore your {model}.</h2></div><div className="page-category-grid">{categories.map(name => <a key={name} href={`${categoryPath(name)}?model=${encodeURIComponent(model)}`}><h2>{name}</h2><span>Explore {model} parts ↗</span></a>)}</div></PageLayout>;
}
