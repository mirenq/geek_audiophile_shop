import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { CartItem } from '../App';

interface CartPageProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
}

export function CartPage({ cartItems, updateQuantity }: CartPageProps) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 99 ? 0 : 10;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="mb-4">Your cart is empty</h2>
        <p className="text-neutral-600 mb-8">Add some items to get started</p>
        <Button onClick={() => navigate('/products')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border border-neutral-200 bg-white">
              <div className="w-24 h-24 flex-shrink-0 bg-neutral-100 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="mb-1">{item.name}</h3>
                <p className="text-neutral-600 mb-4">${item.price}</p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-neutral-200">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-neutral-100"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 border-x border-neutral-200">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => updateQuantity(item.id, 0)}
                    className="text-neutral-600 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="border border-neutral-200 p-6 bg-neutral-50 sticky top-24">
            <h2 className="mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  You've qualified for free shipping!
                </p>
              )}
              {shipping > 0 && (
                <p className="text-xs text-neutral-600">
                  Add ${(99 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>
            
            <div className="border-t border-neutral-300 pt-3 mb-6">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-neutral-900 hover:bg-neutral-800 mb-3"
              size="lg"
            >
              Proceed to Checkout
            </Button>
            
            <Button 
              onClick={() => navigate('/products')}
              variant="outline"
              className="w-full"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
