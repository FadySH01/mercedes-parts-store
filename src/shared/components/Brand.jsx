import logo from '../../assets/images/everything-benz-logo.png';

export default function Brand({ compact = false }) {
  return <a className={compact ? 'brand brand-compact' : 'brand'} href="/" aria-label="Everything Benz home">
    <svg className="brand-logo" viewBox="60 145 720 270" role="img" aria-label="Everything Benz — powered by Swift Digital Automart Solutions NG">
      <defs><filter id="brand-background" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -.333 -.333 -.333 0 1"/></filter></defs>
      <image href={logo} width="842" height="595" filter="url(#brand-background)"/>
    </svg>
  </a>;
}
