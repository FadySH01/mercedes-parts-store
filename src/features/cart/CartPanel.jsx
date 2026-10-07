import { useCart } from './useCart';
import { useAuth } from '../authentication/AuthProvider';

export default function CartPanel({ products, onSignIn }) {
  const { items, error, update, signedIn } = useCart();
  const { user } = useAuth();
  const lines = items.map(line => ({ ...line, product: products.find(item => item.id === line.id) })).filter(line => line.product);
  const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  async function changeQuantity(id, amount) {
    const next = items.map(line => line.id === id ? { ...line, quantity: line.quantity + amount } : line).filter(line => line.quantity > 0);
    await update(next);
  }

  return <section className="cart-panel"><h2>Your shopping cart</h2>{error && <p className="form-error">{error}</p>}{!signedIn && <p>Sign in to save your cart between visits. <button onClick={onSignIn}>Sign in</button></p>}{signedIn && !lines.length && <p>Your cart is empty. Add a part to get started.</p>}{lines.map(({ id, quantity, product }) => <article className="cart-line" key={id}><img src={product.image} alt=""/><div><b>{product.name}</b><small>{product.part}</small><strong>${(product.price * quantity).toLocaleString()}</strong></div><div className="quantity"><button onClick={()=>changeQuantity(id,-1)} aria-label="Remove one">−</button><span>{quantity}</span><button onClick={()=>changeQuantity(id,1)} aria-label="Add one">+</button></div></article>)}<div className="cart-total"><span>Subtotal</span><b>${total.toLocaleString()}</b></div>{signedIn && lines.length > 0 && <button className="checkout-button" onClick={()=>window.alert('Payment checkout will be enabled after the payment provider is configured.')}>Continue to checkout</button>}{user && <small className="cart-sync">Cart saved to your account</small>}</section>;
}
