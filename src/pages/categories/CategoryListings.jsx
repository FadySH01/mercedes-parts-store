import { formatPrice } from '../../shared/formatPrice';

export default function CategoryListings({ products }) {
  if (!products.length) return null;
  return <section className="category-listings"><h2>Available listings</h2><div className="category-products">{products.map(item => <a className="category-product" key={item.id} href={`/products/${item.id}`}><img src={item.image} alt={item.name} loading="lazy"/><div><span>{item.stock}</span><h3>{item.name}</h3><p>{item.models?.join(', ')}{item.year && ` · ${item.year}`}{item.colour && ` · ${item.colour}`}</p><strong>{item.price ? formatPrice(item.price) : 'Price on request'}</strong><small>View details ↗</small></div></a>)}</div></section>;
}
