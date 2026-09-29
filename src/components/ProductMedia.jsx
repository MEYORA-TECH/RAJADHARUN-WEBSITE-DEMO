export default function ProductMedia({ item, as: Tag = 'div', className = '', style, children, ...rest }) {
  return (
    <Tag className={'media ' + className} style={style} {...rest}>
      {item.img ? <img src={item.img} alt={item.name || item.label} /> : <span className="slot">{item.slot || item.label}</span>}
      {children}
    </Tag>
  );
}
