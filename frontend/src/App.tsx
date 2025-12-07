// src/App.tsx 
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { AuthPage } from './components/AuthPage';
import { CategoryPage } from './components/CategoryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { WarrantyReturnsPage } from './components/WarrantyReturnsPage';

// Cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Wrapper for ProductDetailPage to get id from URL
function ProductDetailWrapper({ addToCart }: { addToCart: (item: Omit<CartItem, 'quantity'>) => void }) {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Product not found</div>;
  return <ProductDetailPage productId={id} addToCart={addToCart} />;
}

// Wrapper for CategoryPage to get category from URL
function CategoryWrapper() {
  const { name } = useParams<{ name: string }>();

  if (!name) return <div>Category not found</div>;

  return <CategoryPage category={name} />;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar cartCount={cartCount} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailWrapper addToCart={addToCart} />} />
            <Route path="/category/:name" element={<CategoryWrapper />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/warranty-returns" element={<WarrantyReturnsPage />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
