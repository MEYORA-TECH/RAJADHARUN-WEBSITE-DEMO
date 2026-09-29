import { Link } from 'react-router-dom';
import { useStore } from '../store.jsx';
import ProductMedia from './ProductMedia.jsx';

export default function ProductCard({ p }) {
  const { openOrder, toggleCart, inCart } = useStore();
  const added = inCart(p.slug);
  return (
    <article className="pcard">
      <ProductMedia as={Link} to={`/products/${p.slug}`} item={p}><span className="tag">{p.cat}</span></ProductMedia>
      <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <h3 className="d800" style={{ fontSize: 34, lineHeight: 0.95 }}>{p.name}</h3>
          <span className="no">No.{p.no}</span>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: '#5A4E45', margin: 0, flex: 1, textWrap: 'pretty' }}>{p.desc}</p>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-red" style={{ flex: 1 }} onClick={() => openOrder(p.slug)}>Order now</button>
        <button className={'btn btn-sm ' + (added ? 'btn-ink' : 'btn-outline')} onClick={() => toggleCart(p.slug)}>{added ? 'In cart ✓' : '+ Cart'}</button>
      </div>
    </article>
  );
}
