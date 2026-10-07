import LandingHeader from '../../pages/landing-page/LandingHeader';
import StoreFooter from '../../pages/home/StoreFooter';
export default function PageLayout({ title, children, showHome = true }) {
  return <><LandingHeader/><main className="page-content">{showHome && <a href="/">Home</a>}<h1>{title}</h1>{children}</main><StoreFooter/></>;
}
