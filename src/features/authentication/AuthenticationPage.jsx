import LandingHeader from '../../pages/landing-page/LandingHeader';
import './authentication.css';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import { afterSignIn, loginPath } from './authRedirect';
export default function AuthenticationPage({ mode }) {
  const back = () => { window.location.href = loginPath(afterSignIn()); };
  const done = () => { window.location.href = afterSignIn(); };
  return <><LandingHeader/><main className="authentication-page">
    <section className="auth-panel"><span className="auth-kicker">YOUR EVERYTHING BENZ ACCOUNT</span>{mode==='reset'?<ForgotPassword onBack={back}/>:<Login initialMode={mode} onClose={done}/>}</section>
  </main></>;
}

