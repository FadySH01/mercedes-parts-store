

import film from '../../assets/videos/engine-repair-workshop.mp4';
import { images } from '../../assets/images';
import { useAuth } from '../../features/authentication/AuthProvider';
import { loginPath } from '../../features/authentication/authRedirect';

export default function LandingHero() {
  const { user } = useAuth();
  const destination = path => user ? path : loginPath(path);
  return <section className="landing-hero"><video src={film} poster={images.workshop} autoPlay muted loop playsInline onLoadedMetadata={event => { event.currentTarget.playbackRate = 0.6; }}/><div className="landing-shade"/>
    <div className="landing-hero-copy"><span>PRECISION IN EVERY PART</span><h1>Keep your Mercedes.<br/>At its best.</h1><p>Engines. Transmissions. Every detail in between.</p><a className="pill white" href={destination('/home')}>Explore parts</a><a className="pill outline" href={user ? '/home' : '/login'}>Sign in</a></div>
    <div className="landing-hero-bottom"><span>BUILT FOR THE WAY YOU MOVE</span></div>
  </section>;
}


