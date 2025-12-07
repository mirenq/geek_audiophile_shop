import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CartItem } from '../App';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';

interface CheckoutPageProps {
  cartItems: CartItem[];
}

export function CheckoutPage({ cartItems }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 99 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="border border-neutral-200 p-6">
            <h2 className="mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border border-neutral-200 p-6">
            <h2 className="mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div>
                <Label htmlFor="state">State / Province</Label>
                <Input id="state" placeholder="NY" />
              </div>
              <div>
                <Label htmlFor="zip">ZIP / Postal Code</Label>
                <Input id="zip" placeholder="10001" />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="United States" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-neutral-200 p-6">
            <h2 className="mb-6">Payment Method</h2>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 border border-neutral-200 p-4 rounded cursor-pointer hover:bg-neutral-50">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex-1 cursor-pointer flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Credit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2 border border-neutral-200 p-4 rounded cursor-pointer hover:bg-neutral-50">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                  PayPal
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'card' && (
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM / YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Security Note */}
          <div className="flex items-start gap-3 p-4 bg-neutral-50 border border-neutral-200">
            <Lock className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-neutral-600">
              <p>All transactions are secure and encrypted.</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="border border-neutral-200 p-6 bg-neutral-50 sticky top-24">
            <h2 className="mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-neutral-600">
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6 pt-6 border-t border-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="border-t border-neutral-300 pt-3 mb-6">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-neutral-900 hover:bg-neutral-800"
              size="lg"
            >
              Place Order
            </Button>
            
            <div className="flex items-start gap-2 mt-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-xs text-neutral-600 cursor-pointer">
                I agree to the terms and conditions and privacy policy
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
