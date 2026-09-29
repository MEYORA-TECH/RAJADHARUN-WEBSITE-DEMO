import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store.jsx';

export default function CartDrawer() {
  const { cartOpen, closeCart, cartItems, cartCount, bump, toggleCart } = useStore();
  const [sent, setSent] = useState(false);
  const nav = useNavigate();
  useEffect(() => { setSent(false); }, [cartCount]);
  if (!cartOpen) return null;
  const submit = (e) => { e.preventDefault(); /* TODO: submit cart quote */ setSent(true); };
  return (
    <div className="scrim" style={{ background: 'rgba(20,16,16,.55)' }} onClick={closeCart}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '24px 28px', borderBottom: '1.5px solid #141010', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="display" style={{ fontSize: 40, lineHeight: 1 }}>Enquiry cart</div>
          <button className="xbtn" onClick={closeCart}>✕</button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '8px 28px' }}>
          {cartCount === 0 && (
            <div style={{ padding: '48px 0', textAlign: 'center' }}>
              <p className="serif" style={{ fontSize: 26, marginBottom: 20 }}>Your cart is empty.</p>
              <button className="btn btn-red" style={{ height: 50 }} onClick={() => { closeCart(); nav('/products'); }}>Browse catalogue</button>
            </div>
          )}
          {cartItems.map(({ product: p, qty }) => (
            <div key={p.slug} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 14, alignItems: 'center', padding: '16px 0', borderBottom: '1px solid #D4C7B6' }}>
              <div className="stripe" style={{ width: 64, height: 64, borderRadius: 12, overflow: 'hidden', border: '1.5px solid #141010' }}>
                {p.img && <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              </div>
              <div>
                <div className="d800" style={{ fontSize: 24 }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <button className="qbtn" onClick={() => bump(p.slug, -1)}>−</button>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 13, minWidth: 56, textAlign: 'center' }}>{qty} MT</span>
                  <button className="qbtn" onClick={() => bump(p.slug, 1)}>+</button>
                </div>
              </div>
              <button onClick={() => toggleCart(p.slug)} style={{ background: 'none', border: 'none', fontSize: 13, textDecoration: 'underline', color: '#6B5E54' }}>Remove</button>
            </div>
          ))}
        </div>
        {cartCount > 0 && (
          <div style={{ padding: '24px 28px', borderTop: '1.5px solid #141010', background: '#FBF7F1' }}>
            {sent ? (
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}><strong>Quote requested.</strong> We’ll reply with combined pricing shortly.</p>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input className="plain-input" required placeholder="Name / Company" style={{ height: 46, fontSize: 16 }} />
                <input className="plain-input" required type="email" placeholder="Email" style={{ height: 46, fontSize: 16 }} />
                <button type="submit" className="submit" style={{ marginTop: 10, height: 56 }}>Request quote for {cartCount} items →</button>
              </form>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
