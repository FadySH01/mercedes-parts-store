import { Play, Wrench } from 'lucide-react';
import { formatPrice } from '../formatPrice';

export default function ProductDetails({ product, onAdd, onVideo }) {
  return <div className="product-modal">
    {product.image && <img src={product.image} alt={product.name}/>}
    <div><span className="eyebrow">{product.brand}</span><h2>{product.name}</h2>
      {product.part && <p className="part-number">Part number {product.part}</p>}<div className="fitment"><Wrench size={14}/>{product.fit}</div>
      <p>{product.description || (product.sourcing ? 'Send your model, year and trim to request this part. The team will confirm exact fitment, condition, availability and price.' : 'Confirm exact fitment, condition and availability with the team before purchase.')}</p>
      <div className="modal-price">{product.price ? formatPrice(product.price) : 'Price on request'} <small>{product.stock}</small></div>
      {product.sourcing || product.stock==='Not available' ? <a href={`/request-part?part=${encodeURIComponent(product.name)}`} className="add-btn">Request availability</a> : <button className="add-btn" onClick={() => onAdd(product.id)}>Add to cart</button>}
      <button className="video-request" onClick={onVideo}><Play size={15}/> Request video verification</button>
      <h4>Product details</h4><ul><li>Condition: {product.condition}</li><li>Availability: {product.stock}</li>{product.part && <li>Part number: {product.part}</li>}</ul>
    </div>
  </div>;
}
