export default function Marquee({ items, sep, duration = 45 }) {
  const row = (k) => (
    <div className="marquee-row" key={k} aria-hidden={k === 'b'}>
      {items.map((t, i) => (
        <span className="marquee-item" key={i}>{t}<span className="marquee-sep">{sep}</span></span>
      ))}
    </div>
  );
  return <div className="marquee-track" style={{ animation: `rdMarquee ${duration}s linear infinite` }}>{row('a')}{row('b')}</div>;
}
