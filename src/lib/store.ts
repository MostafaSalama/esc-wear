import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  wishlist: string[];

  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      isMobileMenuOpen: false,
      wishlist: [],

      addToCart: (item) => {
        set((state) => {
          const existing = state.cart.find(
            (i) => i.productId === item.productId && i.size === item.size && i.color === item.color
          );
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.productId === item.productId && i.size === item.size && i.color === item.color
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        });
      },

      removeFromCart: (productId, size, color) => {
        set((state) => ({
          cart: state.cart.filter(
            (i) => !(i.productId === productId && i.size === size && i.color === color)
          ),
        }));
      },

      updateQuantity: (productId, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, size, color);
          return;
        }
        set((state) => ({
          cart: state.cart.map((i) =>
            i.productId === productId && i.size === size && i.color === color
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      setCartOpen: (open) => set({ isCartOpen: open }),
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

      toggleWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        }));
      },

      isInWishlist: (productId) => get().wishlist.includes(productId),
      cartTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
    }),
    {
      name: 'esc-wear-store',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
      skipHydration: true,
    }
  )
);
