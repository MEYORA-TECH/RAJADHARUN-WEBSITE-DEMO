import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, HERO_PRODUCTS, PROMISES, CONTACT } from '../data.js';
import Marquee from '../components/Marquee.jsx';
import ProductMedia from '../components/ProductMedia.jsx';
import Field from '../components/Field.jsx';

export default function Home() {
  const [sent, setSent] = useState(false);
  const [docket] = useState(() => String(Math.floor(1000 + Math.random() * 9000)));
  const submit = (e) => { e.preventDefault(); /* TODO: submit offer enquiry */ setSent(true); };
  return (
    <>
      <section className="hero">
        <div className="wrap" style={{ paddingTop: 28 }}>
          <div className="hero-meta mono">
            <span>Export catalogue · Vol. 01</span>
            <span>Manufacturers · Exporters · Importers · Wholesale</span>
            <span>13.12° N, 80.10° E — Chennai</span>
          </div>
          <div className="hero-main">
            <div style={{ flex: '1 1 520px', minWidth: 0 }}>
              <div className="hero-kicker">From Indian farms to global markets —</div>
              <h1 className="display">Nature’s<br />best.</h1>
            </div>
            <div className="hero-side">
              <div className="stamp"><small>SHIPPED</small><b>WORLD<br />WIDE</b><small>EST. 2026</small></div>
              <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>Premium-grade Indian spices, jaggery, rice and nuts — sourced from trusted farmers and processed under strict quality control.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a href="#offer" className="btn btn-hi">Get best offer price</a>
                <Link to="/products" className="btn btn-ghost-hi">Catalogue →</Link>
              </div>
            </div>
          </div>
          <div className="hero-cards">
            {HERO_PRODUCTS.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="hero-card">
                <ProductMedia item={p} />
                <div className="card-foot"><span className="d800" style={{ fontSize: 28 }}>{p.name}</span><span className="no">No.{p.no}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bigmarquee"><div><Marquee items={PRODUCTS.map((p) => p.name)} sep="✺" duration={60} /></div></section>

      <section className="wrap" style={{ paddingTop: 112, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: '32px 64px', alignItems: 'end', marginBottom: 48 }}>
          <h2 className="display" style={{ fontSize: 'clamp(64px,9vw,140px)', lineHeight: 0.82 }}>The<br /><span className="red">Index.</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 460 }}>
            <p className="serif" style={{ fontSize: 28, lineHeight: 1.2 }}>Ten products, four families — every one graded, packed and shipped from Chennai.</p>
            <Link to="/products" className="linkbtn">Open full catalogue →</Link>
          </div>
        </div>
        <div style={{ borderBottom: '1.5px solid #141010' }}>
          {PRODUCTS.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="index-row">
              <span style={{ fontFamily: 'var(--mono)', fontSize: 13 }}>{p.no}</span>
              <span className="d800" style={{ fontSize: 'clamp(30px,3.6vw,52px)' }}>{p.name}</span>
              <span className="ix-cat" style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', opacity: 0.75 }}>{p.cat}</span>
              <span className="ix-desc" style={{ fontSize: 15, lineHeight: 1.5, opacity: 0.85, textWrap: 'pretty' }}>{p.desc}</span>
              <span style={{ fontSize: 24, justifySelf: 'end' }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#141010', color: '#F4EEE4' }}>
        <div className="wrap" style={{ paddingTop: 112, paddingBottom: 112 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 64 }}>
            <h2 className="display" style={{ fontSize: 'clamp(56px,8vw,120px)', lineHeight: 0.85 }}>Four promises.<br /><span className="serif" style={{ fontStyle: 'italic', textTransform: 'none', color: '#FF6A5E' }}>every shipment.</span></h2>
            <p style={{ maxWidth: 380, fontSize: 16, lineHeight: 1.6, color: '#BFB3A8', margin: 0 }}>Our supply chain is built for long-term buyers — wholesalers, distributors, retailers and bulk importers worldwide.</p>
          </div>
          <div className="promises">
            {PROMISES.map((x) => (
              <div key={x.n} className="promise">
                <span className="display" style={{ fontSize: 88, lineHeight: 0.8, color: '#FF6A5E' }}>{x.n}</span>
                <span style={{ flex: 1 }} />
                <h3 className="d800" style={{ fontSize: 34 }}>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="wrap" style={{ paddingTop: 112, paddingBottom: 112, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div className="mono red" style={{ fontSize: 12, letterSpacing: '.18em', marginBottom: 20 }}>Bulk offers</div>
          <h2 className="display" style={{ fontSize: 'clamp(64px,8.5vw,128px)', lineHeight: 0.82, marginBottom: 28 }}>Order more.<br /><span className="red">Pay less.</span></h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 460, margin: '0 0 28px', color: '#4A3F38' }}>Tell us what you need and how much. We’ll reply with our best offer price and catalogue — usually within one business day.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-wa" style={{ height: 48, fontSize: 14, padding: '0 20px' }}>WhatsApp {CONTACT.whatsapp}</a>
            <a href={'mailto:' + CONTACT.email} className="btn btn-outline" style={{ height: 48, fontSize: 14, padding: '0 20px' }}>Email us</a>
          </div>
        </div>
        <div className="panel" style={{ boxShadow: '10px 10px 0 #C4121A' }}>
          <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 18, borderBottom: '1.5px dashed #141010', marginBottom: 10 }}>
            <span>Enquiry docket</span><span className="red">No. RI—{docket}</span>
          </div>
          {sent ? (
            <div style={{ padding: '56px 0', textAlign: 'center' }}>
              <div className="display red" style={{ fontSize: 64, lineHeight: 0.9 }}>Received.</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4A3F38', margin: '16px auto 24px', maxWidth: 340 }}>Thank you — our team will send your best offer price shortly.</p>
              <button className="linkbtn" style={{ alignSelf: 'center', fontSize: 14 }} onClick={() => setSent(false)}>Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Field label="Name / Company" required placeholder="Your name or company name" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0 24px' }}>
                <Field label="Email" required type="email" placeholder="For receiving the catalogue" />
                <Field label="Phone" required type="tel" placeholder="10 digit contact no." />
              </div>
              <Field as="textarea" label="Message" rows="3" placeholder="Products, quantities, destination port…" />
              <button type="submit" className="submit">Get best offer price →</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
