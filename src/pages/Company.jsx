const LEADERS = [
  { name: 'Rajadharun B', role: 'Managing Director · Signing authority' },
  { name: 'Indira B', role: 'Director' },
];
const FACTS = [
  ['Nature of business', 'Mfr · Export · Import · Wholesale'],
  ['Established', '2026'],
  ['Headquarters', 'Tidel Park, Chennai'],
  ['Range', '10 products'],
];
const BOXES = [
  ['Vision', 'To be an outstanding source for our customers — superior products and uncompromising quality.'],
  ['Mission', 'Superior-quality ingredients for FMCG, dietary supplements, nutraceuticals and cosmeceuticals.'],
  ['Who we serve', 'Wholesalers, distributors, retailers and bulk buyers — at home and worldwide.', true],
];

export default function Company() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 56 }}>
        <div className="crumb">Home / Company profile</div>
        <h1 className="display" style={{ fontSize: 'clamp(80px,14vw,220px)', lineHeight: 0.8 }}>Rooted in<br /><span className="red">Tamil Nadu.</span></h1>
      </section>
      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 96, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 56 }}>
        <p className="serif" style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.2, textWrap: 'pretty' }}>A Chennai-based exporter, importer and supplier of high-quality agricultural products — delivering premium-grade Indian spices and food products to domestic and international markets.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: 17, lineHeight: 1.7, color: '#3F352F' }}>
          <p style={{ margin: 0 }}>We specialise in jaggery powder, palm jaggery, black pepper, coconut, cardamom, dry red chilli, turmeric finger, cashew nuts, basmati and non-basmati rice. Every product is carefully sourced from trusted farmers and processed under strict quality control to maintain natural freshness, rich aroma, authentic taste and high nutritional value.</p>
          <p style={{ margin: 0 }}>We focus on hygienic packaging, timely shipment and competitive pricing. Our efficient supply chain and professional approach help us build long-term business relationships — and we strive to continuously expand our reach with consistent quality and dependable service.</p>
        </div>
      </section>
      <section style={{ background: '#C4121A', color: '#FFF4EC' }}>
        <div className="wrap" style={{ paddingTop: 40, paddingBottom: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
          {FACTS.map(([k, v]) => (
            <div key={k}><div className="mono" style={{ letterSpacing: '.14em', opacity: 0.85 }}>{k}</div><div className="d800" style={{ fontSize: 30, marginTop: 8 }}>{v}</div></div>
          ))}
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: 96, paddingBottom: 96, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 20 }}>
        {BOXES.map(([k, v, dark]) => (
          <div key={k} className="box" style={dark ? { background: '#141010', color: '#F4EEE4' } : undefined}>
            <span className="mono" style={{ color: dark ? '#FF6A5E' : '#C4121A' }}>{k}</span>
            <p className="serif" style={{ fontSize: 26, lineHeight: 1.25 }}>{v}</p>
          </div>
        ))}
      </section>
      <section className="wrap" style={{ paddingBottom: 112 }}>
        <h2 className="display" style={{ fontSize: 'clamp(56px,7vw,104px)', lineHeight: 0.85, marginBottom: 32 }}>Leadership</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 20 }}>
          {LEADERS.map((l) => (
            <div key={l.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, alignItems: 'center', borderTop: '1.5px solid #141010', paddingTop: 24 }}>
              <div className="media" style={{ aspectRatio: '1/1', borderRadius: '50%' }}><span className="slot" style={{ fontSize: 10 }}>portrait</span></div>
              <div><div className="d800" style={{ fontSize: 44 }}>{l.name}</div><div className="mono red" style={{ fontSize: 12, letterSpacing: '.12em', marginTop: 8 }}>{l.role}</div></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
