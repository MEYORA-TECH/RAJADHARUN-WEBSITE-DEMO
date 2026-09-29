import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Marquee from './components/Marquee.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import OrderModal from './components/OrderModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Company from './pages/Company.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import { TICKER } from './data.js';

const SHOW_TICKER = true;
const SHOW_WHATSAPP = true;

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 120);
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="site">
      <ScrollManager />
      {SHOW_TICKER && (
        <div className="topticker"><Marquee items={TICKER} sep="✦" duration={45} /></div>
      )}
      <Header />
      <main className="page-in" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {SHOW_WHATSAPP && <WhatsAppFab />}
      <OrderModal />
      <CartDrawer />
    </div>
  );
}
