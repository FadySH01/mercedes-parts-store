import LandingHeader from './LandingHeader';
import LandingHero from './LandingHero';
import PartCollections from './PartCollections';
import ModelSpotlight from './ModelSpotlight';
import StoreFooter from '../home/StoreFooter';
import './landing.css';
export default function LandingPage() {
  return <><LandingHeader overlay/><LandingHero/><PartCollections/><ModelSpotlight/><StoreFooter/></>;
}
