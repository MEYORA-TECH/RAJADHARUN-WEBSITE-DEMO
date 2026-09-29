import { Link } from 'react-router-dom';
import { NAV, CONTACT } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap" style={{ paddingTop: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40 }}>
        <div style={{ gridColumn: 'span 2', minWidth: 0 }}>
          <p className="serif" style={{ fontSize: 30, lineHeight: 1.2, marginBottom: 24, maxWidth: 460 }}>Premium Indian spices &amp; agri products — from Chennai to the world.</p>
          <Link to="/#offer" className="btn btn-red" style={{ height: 50 }}>Send enquiry</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span className="mono" style={{ color: '#9C8F84', marginBottom: 6, letterSpacing: '.14em' }}>Pages</span>
          {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15 }}>
          <span className="mono" style={{ color: '#9C8F84', marginBottom: 6, letterSpacing: '.14em' }}>Contact</span>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={CONTACT.whatsappHref}>WhatsApp {CONTACT.whatsapp}</a>
          <a href={'mailto:' + CONTACT.email} style={{ wordBreak: 'break-all' }}>{CONTACT.email}</a>
          <span style={{ color: '#BFB3A8', lineHeight: 1.5 }}>Tidel Park, Pattabiram, Chennai 600072</span>
        </div>
      </div>
      <div className="footer-word">Rajadharun</div>
      <div className="wrap mono" style={{ paddingTop: 20, paddingBottom: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, letterSpacing: '.12em', color: '#9C8F84' }}>
        <span>© Rajadharun International Pvt. Ltd.</span><span>All rights reserved</span>
      </div>
    </footer>
  );
}
