import { useState } from 'react';
import { ArrowRight, MessageCircle, Play } from 'lucide-react';
import { useCatalog } from '../../features/products/useCatalog';
import { useAuth } from '../../features/authentication/AuthProvider';
import { useCart } from '../../features/cart/useCart';
import { useWishlist } from '../../features/cart/useWishlist';
import { firebaseReady } from '../../lib/firebase';
import { categories as categoryList } from '../../shared/products';
import Brand from '../../shared/components/Brand';
import SectionHeading from '../../shared/components/SectionHeading';
import CategoryGrid from '../../shared/components/CategoryGrid';
import VehicleFinder from '../../shared/components/VehicleFinder';
import PartRequestForm from '../../shared/components/PartRequestForm';
import Modal from '../../shared/components/Modal';
import Toast from '../../shared/components/Toast';
import ProductBrowser from './ProductBrowser';
import SiteHeader from './SiteHeader';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import PromoBand from './PromoBand';
import RequestSection from './RequestSection';
import StoreFooter from './StoreFooter';
import AuthPage from '../../features/authentication/Login';
import CartPanel from '../../features/cart/CartPanel';
import ProductDetails from '../../shared/components/ProductDetails';

function VideoBanner({ onClick }) {
  return <section className="video-banner"><div className="video-icon"><Play fill="currentColor"/></div><div><span className="eyebrow">Confidence before checkout</span><h2>Want to see the part first?</h2><p>For high-value items, ask our team about a live product check.</p></div><button onClick={onClick}>Request verification <ArrowRight size={15}/></button></section>;
}

export default function HomePage() {
  const { user } = useAuth();
  const { items, update } = useCart();
  const catalog = useCatalog();
  const [category,setCategory] = useState(new URLSearchParams(location.search).get('category') || 'All parts');
  const [query,setQuery] = useState('');
  const [model,setModel] = useState(new URLSearchParams(location.search).get('model') || 'All Mercedes-Benz models');
  const [year,setYear] = useState('Any year');
  const [condition,setCondition] = useState('Any condition');
  const { items:wishlist, toggle:toggleWishlist } = useWishlist();
  const [modal,setModal] = useState('');
  const [selected,setSelected] = useState(null);
  const [toast,setToast] = useState('');
  const notify = message => { setToast(message); window.setTimeout(()=>setToast(''),2600); };
  async function addToCart(id) {
    if (!user) { window.location.href='/login'; notify('Sign in to save items in your cart'); return; }
    const current = items.find(line => line.id === id);
    await update(current ? items.map(line => line.id === id ? { ...line, quantity:line.quantity+1 } : line) : [...items,{ id, quantity:1 }]);
    notify('Part added to your saved cart');
  }
  function toggleWish(id) {
    if (!user) { window.location.href='/login'; notify('Sign in to save your wishlist'); return; }
    toggleWishlist(id).catch(error=>notify(error.message));
  }
  const cartCount = items.reduce((sum,line)=>sum+line.quantity,0);
  const scrollParts = () => document.querySelector('#parts')?.scrollIntoView({behavior:'smooth'});
  return <><SiteHeader count={cartCount} onCart={()=>window.location.href='/cart'} onAuth={()=>window.location.href='/login'}/>
    <main id="top"><Hero/><VehicleFinder model={model} setModel={setModel} year={year} setYear={setYear} onFind={scrollParts}/><TrustStrip/>
      <section className="categories section" id="categories"><SectionHeading eyebrow="Browse by category" title="Parts for every journey." action={{href:'/shop#parts',label:'View all parts →'}}/><CategoryGrid categories={categoryList} selected={category} onSelect={value=>{setCategory(value);scrollParts()}}/></section>
      <PromoBand/><ProductBrowser catalog={catalog} category={category} setCategory={setCategory} query={query} setQuery={setQuery} model={model} year={year} condition={condition} setCondition={setCondition} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} onDetails={product=>{window.location.href='/products/'+product.id}}/>
      <RequestSection onNotify={notify}/><VideoBanner onClick={()=>window.location.href='/video-verification'}/>
    </main><StoreFooter/><Toast message={toast}/>
    {!firebaseReady&&<div className="firebase-notice">Firebase setup needed: add project values to <code>.env.local</code> to enable accounts and saved carts.</div>}
    {modal==='auth'&&<Modal onClose={()=>setModal('')}><AuthPage onClose={()=>setModal('')}/></Modal>}
    {modal==='cart'&&<Modal onClose={()=>setModal('')}><CartPanel products={catalog} onSignIn={()=>window.location.href='/login'}/></Modal>}
    {modal==='product'&&selected&&<Modal onClose={()=>setModal('')}><ProductDetails product={selected} onAdd={id=>{addToCart(id)}} onVideo={()=>setModal('video')}/></Modal>}
  </>;
}



