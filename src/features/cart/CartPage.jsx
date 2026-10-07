import PageLayout from '../../shared/components/PageLayout';
import CartPanel from './CartPanel';
import { useCatalog } from '../products/useCatalog';
export default function CartPage() {
  const products = useCatalog();
  return <PageLayout title="Shopping cart"><CartPanel products={products} onSignIn={()=>{window.location.href='/login'}}/></PageLayout>;
}
