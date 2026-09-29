# Rajadharun International — React site

Vite + React 18 + React Router 6. Each tab is a real route.

```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## Routes
| Path | Page |
|---|---|
| `/` | Home |
| `/about` | Company profile |
| `/products` | Catalogue (category filter) |
| `/products/:slug` | Product detail |
| `/gallery` | Gallery |
| `/contact` | Contact |

## Structure
```
src/
  data.js                 products, categories, nav, gallery, contact info
  styles.css              all design tokens + styles
  store.jsx               enquiry cart + order modal state (persisted to localStorage)
  components/             Header, Footer, Marquee, OrderModal, CartDrawer, ProductCard, ProductMedia, Field, WhatsAppFab
  pages/                  Home, Products, ProductDetail, Company, Gallery, Contact
```

## Hosting
It's a single-page app — configure a fallback to `index.html`
(Netlify: `public/_redirects` included; Vercel: `vercel.json` included).

## To wire up
- Forms currently show a success state only. Hook `onSubmit` handlers (search `TODO: submit`) to your email/CRM endpoint.
- Replace striped image placeholders by adding `img` URLs to products in `src/data.js` and gallery items.
- Product specs show "Contact us for details" until confirmed.
