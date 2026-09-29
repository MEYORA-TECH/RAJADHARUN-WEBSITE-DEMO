import { Link, useParams } from 'react-router-dom';
import { PRODUCTS, SPECS, CONTACT, getProduct } from '../data.js';
import { useStore } from '../store.jsx';
import ProductMedia from '../components/ProductMedia.jsx';

export default function ProductDetail() {
  const { slug } = useParams();
  const p = getProduct(slug) || PRODUCTS[0];
  const { openOrder, toggleCart, inCart } = useStore();
  const others = PRODUCTS.filter((x) => x.slug !== p.slug && x.cat === p.cat).concat(PRODUCTS.filter((x) => x.cat !== p.cat)).slice(0, 4);
  const wa = CONTACT.whatsappHref + '?text=' + encodeURIComponent('Hello, I am interested in ' + p.name + '.');
  return (
    <section className="wrap" style={{ paddingTop: 32, paddingBottom: 96 }}>
      <div className="mono" style={{ display: 'flex', gap: 8, letterSpacing: '.14em', marginBottom: 28 }}>
        <Link to="/" style={{ color: '#6B5E54' }}>Home</Link><span>/</span>
        <Link to="/products" style={{ color: '#6B5E54' }}>Catalogue</Link><span>/</span>
        <span className="red">{p.name}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 48, alignItems: 'start' }}>
        <ProductMedia item={p} style={{ aspectRatio: '1/1', borderRadius: 32, border: '1.5px solid #141010' }}>
          <span className="mono" style={{ position: 'absolute', bottom: 20, left: 20, background: '#C4121A', color: '#fff', borderRadius: 999, padding: '8px 14px', letterSpacing: '.12em' }}>No.{p.no} / 10</span>
        </ProductMedia>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
          <span className="mono red" style={{ fontSize: 12 }}>{p.cat}</span>
          <h1 className="display" style={{ fontSize: 'clamp(64px,8vw,120px)', lineHeight: 0.82 }}>{p.name}</h1>
          <p className="serif" style={{ fontSize: 28, lineHeight: 1.25, textWrap: 'pretty' }}>{p.desc}</p>
          <div style={{ borderTop: '1.5px solid #141010' }}>
            {SPECS.map((s) => (
              <div key={s.k} className="spec">
                <span style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6B5E54' }}>{s.k}</span>
                <span style={{ fontWeight: 600 }}>{s.v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <button className="btn btn-red" style={{ height: 56, padding: '0 28px', fontSize: 16 }} onClick={() => openOrder(p.slug)}>Order now</button>
            <button className="btn btn-outline" style={{ height: 56 }} onClick={() => toggleCart(p.slug)}>{inCart(p.slug) ? 'In enquiry cart ✓' : '+ Add to enquiry cart'}</button>
            <a className="btn btn-wa" style={{ height: 56 }} href={wa} target="_blank" rel="noreferrer">WhatsApp enquiry</a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 96 }}>
        <h2 className="display" style={{ fontSize: 56, lineHeight: 1, marginBottom: 24 }}>Also from the index</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {others.map((x) => (
            <Link key={x.slug} to={`/products/${x.slug}`} className="mini">
              <ProductMedia item={x} style={{ aspectRatio: '4/3', borderRadius: 12 }} />
              <span className="d800" style={{ fontSize: 26, padding: '0 4px 4px' }}>{x.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
