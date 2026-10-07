import { ArrowUpRight, Plus, Wrench } from 'lucide-react';
import { formatPrice } from '../formatPrice';

export default function ProductCard({ product, wished, onWish, onAdd, onDetails }) {
  return <article className="product-card">
    <button className={wished ? 'wish-btn wished' : 'wish-btn'} onClick={() => onWish(product.id)} aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}>{wished ? '♥' : '♡'}</button>
    <button className="product-photo" onClick={() => onDetails(product)} aria-label={`View ${product.name}`}>
      <img src={product.image} alt={product.name}/>
      <span className="condition-badge">{product.condition}</span>
    </button>
    <div className="product-info">
      <div className="product-brand">{product.brand}</div>
      <button className="product-name" onClick={() => onDetails(product)}>{product.name}</button>
      {product.part && <div className="part-number">Part no. {product.part}</div>}
      <div className="fitment"><Wrench size={13}/>{product.fit}</div>
      {product.rating && <div className="rating"><span>★★★★★</span> {product.rating} <small>({product.reviews})</small></div>}
      <div className="price-row"><b>{product.price ? formatPrice(product.price) : 'Price on request'}</b><span className="stock"><i/>{product.stock}</span></div>
      <div className="product-actions">{product.sourcing || product.stock==='Not available' ? <a className="add-btn" href={`/request-part?part=${encodeURIComponent(product.name)}`}>Request availability</a> : <button className="add-btn" onClick={() => onAdd(product.id)}>Add to cart <Plus size={15}/></button>}<button className="detail-btn" onClick={() => onDetails(product)} aria-label="More product details"><ArrowUpRight size={16}/></button></div>
    </div>
  </article>;
}
