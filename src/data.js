const IMG_JAGGERY = 'https://www.vyaparbharat.com/uploaded_files/product/1772192959.jpg';

export const LOGO = 'https://www.vyaparbharat.com/uploaded_files/company/1772192626.png';

export const CONTACT = {
  phone: '+91 77808 35050',
  phoneHref: 'tel:+917780835050',
  whatsapp: '+91 63748 36884',
  whatsappHref: 'https://wa.me/916374836884',
  email: 'rajadharuninternational@rajadharun.com',
  address: '18th Floor, Office 1, Tidel Park Ltd – Block 1 – IT Office, No. 5, CTH Road, Pattabiram, Chennai, Tamil Nadu 600072, India',
};

export const PRODUCTS = [
  { slug: 'jaggery-powder', name: 'Jaggery Powder', cat: 'Sweeteners', desc: 'Free-flowing, unrefined cane sugar — a natural sweetener for food, beverages and sweets.', img: IMG_JAGGERY },
  { slug: 'black-pepper', name: 'Black Pepper', cat: 'Spices', desc: 'Whole, aromatic peppercorns — the king of spices — for retail, processing and export.' },
  { slug: 'green-cardamom', name: 'Green Cardamom', cat: 'Spices', desc: 'Fragrant green pods for sweets, teas, curries and spice blends.' },
  { slug: 'red-chilli', name: 'Red Chilli', cat: 'Spices', desc: 'Dry red chillies that bring heat and colour to cooking and blends.' },
  { slug: 'turmeric-finger', name: 'Turmeric Finger', cat: 'Spices', desc: 'Whole dried turmeric rhizomes for cooking, colouring and wellness products.' },
  { slug: 'coconut', name: 'Coconut', cat: 'Plantation & Nuts', desc: 'Fresh and dry coconut for culinary, oil and food-industry use.' },
  { slug: 'cashew-nut', name: 'Cashew Nut', cat: 'Plantation & Nuts', desc: 'Graded cashew kernels for snacking, confectionery and cooking.' },
  { slug: 'basmati-rice', name: 'Basmati Rice', cat: 'Rice & Grains', desc: 'Long-grain aromatic rice for premium retail and export markets.' },
  { slug: 'non-basmati-rice', name: 'Non Basmati Rice', cat: 'Rice & Grains', desc: 'Everyday rice varieties supplied in bulk for wholesale and export.' },
  { slug: 'palm-jaggery', name: 'Palm Jaggery', cat: 'Sweeteners', desc: 'Traditional sweetener made from palm sap, with a rich, earthy flavour.' },
].map((p, i) => ({ ...p, no: String(i + 1).padStart(2, '0'), slot: 'product shot — ' + p.name.toLowerCase() }));

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

export const HERO_PRODUCTS = ['jaggery-powder', 'black-pepper', 'green-cardamom', 'red-chilli'].map(getProduct);

export const CATEGORIES = ['All', 'Spices', 'Sweeteners', 'Plantation & Nuts', 'Rice & Grains'];

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Company' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export const TICKER = ['Chennai, Tamil Nadu', 'Call +91 77808 35050', 'WhatsApp +91 63748 36884', 'Bulk & quantity discounts', 'Shipping worldwide'];

export const SPECS = [
  { k: 'Origin', v: 'India' },
  { k: 'Grade', v: 'Contact us for details' },
  { k: 'Packaging', v: 'Contact us for details' },
  { k: 'MOQ', v: 'Contact us for details' },
  { k: 'Shelf life', v: 'Contact us for details' },
];

export const PROMISES = [
  { n: '01', t: 'Strict quality control', d: 'Processed to keep natural freshness, rich aroma, authentic taste and nutritional value.' },
  { n: '02', t: 'Hygienic packaging', d: 'Packed clean and sealed for long-haul export and domestic distribution.' },
  { n: '03', t: 'Timely shipment', d: 'An efficient supply chain that keeps your orders on schedule, market to market.' },
  { n: '04', t: 'Competitive pricing', d: 'Exclusive bulk and quantity-purchase discounts for trade buyers.' },
];

export const GALLERY = [
  { label: 'farm sourcing — spice fields', cols: 2, rows: 2 },
  { label: 'product shot — jaggery', cols: 1, rows: 1, img: IMG_JAGGERY },
  { label: 'sorting & grading', cols: 1, rows: 1 },
  { label: 'hygienic packaging line', cols: 1, rows: 2 },
  { label: 'warehouse — Chennai', cols: 2, rows: 1 },
  { label: 'bulk sacks — rice', cols: 1, rows: 1 },
  { label: 'container loading', cols: 2, rows: 1 },
  { label: 'quality lab check', cols: 1, rows: 1 },
  { label: 'product shot — cardamom', cols: 1, rows: 1 },
];
