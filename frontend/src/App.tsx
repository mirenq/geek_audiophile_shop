import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { HomePage } from "./components/HomePage";
import CategoryPage from "./CategoryPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { Navbar } from "./components/Navbar";

import { CartItem } from "./types/cart";

/* ---------- Route wrappers ---------- */

function ProductRoute({ addToCart }: { addToCart: any }) {
  const { id } = useParams();
  return <ProductDetailPage productId={id ?? null} addToCart={addToCart} />;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* ---------- Cart logic ---------- */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prev =>
      quantity <= 0
        ? prev.filter(i => i.id !== id)
        : prev.map(i => (i.id === id ? { ...i, quantity } : i))
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/category/:slug" element={<CategoryPage />} />

        <Route
          path="/product/:id"
          element={<ProductRoute addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cart}
              updateQuantity={updateQuantity}
            />
          }
        />

        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cart} />}
        />

        <Route
          path="/auth"
          element={
            <div className="p-12 text-center">
              <h2>Auth</h2>
              <p>Page under construction</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
