import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../lib/api';

interface NavbarProps {
  cartCount: number;
}

export function Navbar({ cartCount }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const categories = [
    { name: 'Headphones', value: 'headphones' },
    { name: 'Earbuds', value: 'earbuds' },
    { name: 'Amplifiers', value: 'amplifiers' },
    { name: 'DACs', value: 'dacs' },
    { name: 'Cables', value: 'cables' },
  ];


useEffect(() => {
  // Auth disabled for now
}, []);


  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            Free shipping on orders over $99 | 30-day return policy
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h1 className="logo-navbar">GEEK AUDIOPHILE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => navigate(`/category/${category.value}`)}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>



          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(user ? "/profile" : "/auth")}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 hover:bg-neutral-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  navigate(`/category/${category.value}`);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}