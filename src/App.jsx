import MediaCredits from './pages/landing-page/MediaCredits';
import LandingPage from './pages/landing-page/LandingPage';
import HomePage from './pages/home/HomePage';
import CategoriesPage from './pages/categories/CategoriesPage';
import ModelsPage from './pages/models/ModelsPage';
import AuthenticationPage from './features/authentication/AuthenticationPage';
import CartPage from './features/cart/CartPage';
import ProductPage from './pages/products/ProductPage';
import RequestPage from './pages/requests/RequestPage';
import VideoPage from './pages/requests/VideoPage';
import CategoryPage from './pages/categories/CategoryPage';
import AdminPage from './pages/admin/AdminPage';
import ModelPage from './pages/models/ModelPage';
import WishlistPage from './features/cart/WishlistPage';
const pages = {'/media-credits':MediaCredits,'/':LandingPage,'/shop':HomePage,'/home':HomePage,'/categories':CategoriesPage,'/models':ModelsPage,'/cart':CartPage,'/request-part':RequestPage,'/video-verification':VideoPage};
export default function App() {
  const route = window.location.pathname;
  if(route.startsWith('/products/')) return <ProductPage/>;
  if(route.startsWith('/categories/')) return <CategoryPage/>;
  if(route.startsWith('/models/')) return <ModelPage/>;
  if(route==='/admin') return <AdminPage/>;
  if(route==='/wishlist') return <WishlistPage/>;
  if(['/login','/register','/forgot-password'].includes(route)) return <AuthenticationPage mode={route==='/login'?'signin':route==='/register'?'register':'reset'}/>;
  const Page=pages[route];
  return Page?<Page/>:<main className="page-content"><h1>Page not found</h1><a href="/">Return home</a></main>;
}
