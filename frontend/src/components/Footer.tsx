import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="logo-footer mb-4">GEEK AUDIOPHILE</h3>
            <p className="text-sm text-neutral-400">
              Premium audio peripherals for discerning listeners.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/category/headphones')}
                  className="hover:text-white transition-colors"
                >
                  Headphones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/category/earbuds')}
                  className="hover:text-white transition-colors"
                >
                  Earbuds
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/category/amplifiers')}
                  className="hover:text-white transition-colors"
                >
                  Amplifiers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/category/dacs')}
                  className="hover:text-white transition-colors"
                >
                  DACs
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/warranty-returns')}
                  className="hover:text-white transition-colors"
                >
                  Warranty & Returns
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-neutral-400 text-center">
          <p>&copy; 2025 Geek Audiophile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}