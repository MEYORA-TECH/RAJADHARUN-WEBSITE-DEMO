import { GALLERY } from '../data.js';
import ProductMedia from '../components/ProductMedia.jsx';

export default function Gallery() {
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 112 }}>
      <div className="crumb">Home / Gallery</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 40 }}>
        <h1 className="display" style={{ fontSize: 'clamp(80px,13vw,200px)', lineHeight: 0.8 }}>Farm to<br /><span className="red">port.</span></h1>
        <p className="serif" style={{ fontSize: 26, lineHeight: 1.2, maxWidth: 360 }}>A look at our sourcing, packing and shipping.</p>
      </div>
      <div className="ggrid">
        {GALLERY.map((g, i) => (
          <div key={i} className="media gtile" style={{ gridColumn: `span ${g.cols}`, gridRow: `span ${g.rows}` }}>
            {g.img && <img src={g.img} alt={g.label} />}
            <span>{g.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
