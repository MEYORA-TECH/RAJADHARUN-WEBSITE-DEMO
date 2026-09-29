import { useEffect, useState } from 'react';
import { useStore } from '../store.jsx';
import { PRODUCTS, getProduct } from '../data.js';
import Field from './Field.jsx';

export default function OrderModal() {
  const { order, closeOrder, setOrderSlug } = useStore();
  const [sent, setSent] = useState(false);
  useEffect(() => { if (order.open) setSent(false); }, [order.open]);
  if (!order.open) return null;
  const p = getProduct(order.slug) || PRODUCTS[0];
  const submit = (e) => { e.preventDefault(); /* TODO: submit order enquiry */ setSent(true); };
  return (
    <div className="scrim modal-wrap" onClick={closeOrder}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 8 }}>
          <div>
            <div className="mono red" style={{ letterSpacing: '.14em' }}>Order enquiry</div>
            <div className="display" style={{ fontSize: 48, lineHeight: 0.95, marginTop: 6 }}>{p.name}</div>
          </div>
          <button className="xbtn" onClick={closeOrder}>✕</button>
        </div>
        {sent ? (
          <div style={{ padding: '32px 0 8px' }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: '0 0 20px' }}>Thanks — your order enquiry is in. We’ll reply with pricing and availability shortly.</p>
            <button className="btn btn-ink" onClick={closeOrder}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px' }}>
            <Field as="select" label="Product" style={{ gridColumn: '1/-1' }} value={order.slug} onChange={(e) => setOrderSlug(e.target.value)}>
              {PRODUCTS.map((x) => <option key={x.slug} value={x.slug}>{x.name}</option>)}
            </Field>
            <Field label="Quantity" required type="number" min="1" placeholder="e.g. 500" />
            <Field as="select" label="Unit"><option>kg</option><option>MT</option><option>Container</option></Field>
            <Field label="Name / Company" required style={{ gridColumn: '1/-1' }} />
            <Field label="Email" required type="email" />
            <Field label="Phone" required type="tel" />
            <button type="submit" className="submit" style={{ gridColumn: '1/-1', height: 58 }}>Place order enquiry →</button>
          </form>
        )}
      </div>
    </div>
  );
}
