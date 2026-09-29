import { useState } from 'react';
import { PRODUCTS, CONTACT } from '../data.js';
import Field from '../components/Field.jsx';

const lbl = { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', paddingTop: 8 };
const big = { fontFamily: 'var(--display)', fontWeight: 800, fontSize: 40, lineHeight: 1 };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); /* TODO: submit contact form */ setSent(true); };
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 112 }}>
      <div className="crumb">Home / Contact</div>
      <h1 className="display" style={{ fontSize: 'clamp(80px,13vw,200px)', lineHeight: 0.8, marginBottom: 56 }}>Let’s <span className="red">talk</span><br />trade.</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1.5px solid #141010' }}>
          <a className="contact-row" href={CONTACT.phoneHref}><span style={lbl}>Call</span><span style={big}>{CONTACT.phone}</span></a>
          <a className="contact-row wa" href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"><span style={lbl}>WhatsApp</span><span style={big}>{CONTACT.whatsapp}</span></a>
          <a className="contact-row" href={'mailto:' + CONTACT.email}><span style={{ ...lbl, paddingTop: 6 }}>Email</span><span style={{ fontSize: 19, fontWeight: 600, wordBreak: 'break-all', paddingTop: 4 }}>{CONTACT.email}</span></a>
          <div className="contact-row"><span style={{ ...lbl, paddingTop: 4 }}>Office</span><span style={{ fontSize: 17, lineHeight: 1.55 }}>{CONTACT.address}</span></div>
          <div className="media" style={{ marginTop: 24, height: 240, borderRadius: 24, border: '1.5px solid #141010' }}><span className="slot">map — Tidel Park, Pattabiram</span></div>
        </div>
        <div className="panel" style={{ boxShadow: '10px 10px 0 #141010' }}>
          {sent ? (
            <div style={{ padding: '64px 0', textAlign: 'center' }}>
              <div className="display red" style={{ fontSize: 64, lineHeight: 0.9 }}>Message sent.</div>
              <p style={{ color: '#4A3F38', fontSize: 16, margin: '16px 0 0' }}>We’ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '4px 24px' }}>
              <Field label="Name" required />
              <Field label="Company" />
              <Field label="Email" required type="email" />
              <Field label="Phone" required type="tel" />
              <Field as="select" label="Product">{PRODUCTS.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}</Field>
              <Field label="Quantity" placeholder="e.g. 5 MT" />
              <Field as="textarea" label="Message" rows="3" style={{ gridColumn: '1/-1' }} />
              <button type="submit" className="submit" style={{ gridColumn: '1/-1' }}>Send message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
