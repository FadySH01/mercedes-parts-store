import PageLayout from '../../shared/components/PageLayout';
import { useCatalog } from '../products/useCatalog';
import { useWishlist } from './useWishlist';
import { useAuth } from '../authentication/AuthProvider';

export default function WishlistPage() {
  const { user } = useAuth(), { items, toggle } = useWishlist();
  const catalog = useCatalog();
  const selected = catalog.filter(item => items.includes(item.id));
  return <PageLayout title="Your wishlist">{!user ? <p>Sign in to save your favourite parts. <a href="/login">Sign in ↗</a></p> : !selected.length ? <p>Your wishlist is empty. <a href="/shop#parts">Explore parts ↗</a></p> : selected.map(item => <article className="cart-line" key={item.id}><img src={item.image} alt=""/><div><a href={`/products/${item.id}`}><b>{item.name}</b></a><small>{item.stock}</small></div><button onClick={() => toggle(item.id)}>Remove</button></article>)}</PageLayout>;
}
