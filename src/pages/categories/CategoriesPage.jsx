import PageLayout from '../../shared/components/PageLayout';
import { categories } from '../../shared/products';
import { categoryPath } from '../../shared/catalogMeta';
export default function CategoriesPage() {
  return <PageLayout title="Parts categories"><div className="page-category-grid">{categories.map(name=><a href={categoryPath(name)} key={name}><h2>{name}</h2><span>Explore parts →</span></a>)}</div></PageLayout>;
}
