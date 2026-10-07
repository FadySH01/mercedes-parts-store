import { useState } from 'react';
import PageLayout from '../../shared/components/PageLayout';
import { categories } from '../../shared/products';
import { categoryPath } from '../../shared/catalogMeta';
import { useCatalog } from '../../features/products/useCatalog';
import { useModels } from '../../features/products/useModels';
import ModelGallery from './ModelGallery';
import CategoryListings from './CategoryListings';
import './category.css';

export default function CategoryPage() {
  const category = categories.find(name => categoryPath(name) === location.pathname);
  const [model, setModel] = useState(new URLSearchParams(location.search).get('model') || '');
  const models = useModels(), catalog = useCatalog();
  if (!category) return <PageLayout title="Category not found"><a href="/categories">Browse categories</a></PageLayout>;
  const products = catalog.filter(item => !item.sourcing && item.category === category && (!model || item.models?.includes(model)));
  function choose(name) {
    setModel(name);
    history.replaceState(null, '', `${categoryPath(category)}${name ? `?model=${encodeURIComponent(name)}` : ''}`);
  }
  return <PageLayout title={category} showHome={false}>
    <section className="model-selection"><h2>Choose your model</h2>
    <div className="model-options" aria-label="Filter by Mercedes model"><button aria-pressed={!model} className={!model?'active':''} onClick={() => choose('')}>All models</button>{models.map(name => <button aria-pressed={model===name} key={name} className={model===name?'active':''} onClick={() => choose(name)}>{name}</button>)}</div>
    <ModelGallery models={model ? [model] : models} selected={model} choose={choose}/></section>
    <CategoryListings products={products}/>
  </PageLayout>;
}
