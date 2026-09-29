import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  const [cat, setCat] = useState('All');
  const list = PRODUCTS.filter((p) => cat === 'All' || p.cat === cat);
  return (
    <>
      <section style={{ background: '#C4121A', color: '#FFF4EC' }}>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 40 }}>
          <div className="mono" style={{ marginBottom: 18 }}>Home / Catalogue</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
            <h1 className="display" style={{ fontSize: 'clamp(80px,13vw,200px)', lineHeight: 0.8 }}>Catalogue</h1>
            <p className="serif" style={{ fontSize: 26, lineHeight: 1.2, maxWidth: 380 }}>Order direct, or add to your enquiry cart and request one quote for everything.</p>
          </div>
        </div>
      </section>
      <section className="chipbar">
        <div className="wrap" style={{ paddingTop: 14, paddingBottom: 14, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {CATEGORIES.map((c) => (
            <button key={c} className={'chip' + (cat === c ? ' active' : '')} onClick={() => setCat(c)}>
              {c} <sup>{c === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === c).length}</sup>
            </button>
          ))}
        </div>
      </section>
      <section className="wrap pgrid" style={{ paddingTop: 40, paddingBottom: 112 }}>
        {list.map((p) => <ProductCard key={p.slug} p={p} />)}
      </section>
    </>
  );
}
