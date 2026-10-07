import PageLayout from '../../shared/components/PageLayout';
import ProductDetails from '../../shared/components/ProductDetails';
import { useCatalog } from '../../features/products/useCatalog';
import { useAuth } from '../../features/authentication/AuthProvider';
import { useCart } from '../../features/cart/useCart';
export default function ProductPage() {
  const { user } = useAuth(), { items,update } = useCart();
  const products = useCatalog();
  const product = products.find(item=>item.id===window.location.pathname.split('/')[2]);
  async function add(id) {
    if(product.stock==='Not available') return;
    if(!user) { window.location.href='/login'; return; }
    const exists=items.some(line=>line.id===id);
    await update(exists?items.map(line=>line.id===id?{...line,quantity:line.quantity+1}:line):[...items,{id,quantity:1}]);
    window.location.href='/cart';
  }
  return <PageLayout title={product?.name||'Part not found'}>{product?<ProductDetails product={product} onAdd={add} onVideo={()=>{window.location.href='/video-verification'}}/>:<a href="/shop">Return to shop</a>}</PageLayout>;
}
