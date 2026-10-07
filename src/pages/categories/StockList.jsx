import { formatPrice } from '../../shared/formatPrice';
import { categoryImages } from './categoryImages';

export default function StockList({ category, model, products }) {
  return <section><div className="category-section-heading"><span>03 / CATALOG</span><h2>{model ? `${model} listings` : 'Current listings'}</h2><small>{products.length} {products.length===1?'item':'items'}</small></div>{products.length ? <div className="category-products">{products.map(item => <a href={`/products/${item.id}`} key={item.id} className="category-product"><img src={item.image || categoryImages[category]} alt={item.name}/><div><span>{item.stock || 'Availability on request'}</span><h3>{item.name}</h3><p>{item.fit || item.models?.join(', ')}</p><strong>{item.price ? formatPrice(item.price) : 'Price on request'}</strong><small>View details ↗</small></div></a>)}</div> : <div className="category-empty"><h3>No confirmed listing for this selection yet.</h3><p>Use the sourcing options above or tell us exactly what you need.</p><a href="/request-part">Request a part ↗</a></div>}</section>;
}
