import { Link, NavLink } from 'react-router-dom';
import { NAV, LOGO, CONTACT } from '../data.js';
import { useStore } from '../store.jsx';

export default function Header() {
  const { cartCount, openCart } = useStore();
  return (
    <header className="header">
      <div className="header-in">
        <Link to="/" className="logo"><img src={LOGO} alt="Rajadharun International" /></Link>
        <nav className="nav">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone" href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <button className="cart-btn" onClick={openCart}>
            Enquiry cart <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
