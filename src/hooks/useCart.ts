'use client';

import { useStore } from '@/lib/store';

export function useCart() {
  const cart = useStore((s) => s.cart);
  const addToCart = useStore((s) => s.addToCart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const clearCart = useStore((s) => s.clearCart);
  const toggleCart = useStore((s) => s.toggleCart);
  const isCartOpen = useStore((s) => s.isCartOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const cartTotal = useStore((s) => s.cartTotal);
  const cartCount = useStore((s) => s.cartCount);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    isCartOpen,
    setCartOpen,
    total: cartTotal(),
    count: cartCount(),
  };
}
