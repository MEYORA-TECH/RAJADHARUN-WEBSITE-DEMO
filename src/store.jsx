import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { PRODUCTS } from './data.js';

const StoreCtx = createContext(null);
const LS = 'rd-cart-v1';

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS) || '{}'); } catch { return {}; }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [order, setOrder] = useState({ open: false, slug: PRODUCTS[0].slug });

  useEffect(() => { try { localStorage.setItem(LS, JSON.stringify(cart)); } catch {} }, [cart]);

  const toggleCart = useCallback((slug) => setCart((c) => {
    const n = { ...c };
    if (n[slug]) delete n[slug]; else n[slug] = 1;
    return n;
  }), []);
  const bump = useCallback((slug, d) => setCart((c) => ({ ...c, [slug]: Math.max(1, (c[slug] || 1) + d) })), []);

  const cartItems = Object.keys(cart)
    .map((slug) => ({ product: PRODUCTS.find((p) => p.slug === slug), qty: cart[slug] }))
    .filter((i) => i.product);

  const value = {
    cart, cartItems, cartCount: cartItems.length, toggleCart, bump,
    inCart: (slug) => !!cart[slug],
    cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
    order, openOrder: (slug) => setOrder({ open: true, slug }), closeOrder: () => setOrder((o) => ({ ...o, open: false })),
    setOrderSlug: (slug) => setOrder((o) => ({ ...o, slug })),
  };
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export const useStore = () => useContext(StoreCtx);
