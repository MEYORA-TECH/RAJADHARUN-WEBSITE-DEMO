export default function Field({ label, as = 'input', style, children, ...rest }) {
  const Tag = as;
  return (
    <label className="field" style={style}>
      <span>{label}</span>
      {as === 'select' ? <select {...rest}>{children}</select> : <Tag {...rest} />}
    </label>
  );
}
