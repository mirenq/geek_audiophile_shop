import React from 'react';
import { Package, Shield, Clock, CheckCircle } from 'lucide-react';

export function WarrantyReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl mb-4">Warranty & Returns</h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Your satisfaction is our priority. Learn about our warranty coverage and hassle-free return policy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Warranty Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-neutral-900" />
              <h2 className="text-3xl">Warranty Policy</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">What's Covered</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Manufacturing defects in materials or workmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Electrical or mechanical failures under normal use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Component failures not caused by misuse</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">What's Not Covered</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Physical damage from accidents, drops, or impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Water or liquid damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Normal wear and tear (e.g., ear pad deterioration, cable fraying)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Unauthorized modifications or repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Lost or stolen items</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Returns Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-neutral-900" />
              <h2 className="text-3xl">Returns Policy</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Return Conditions</h3>
                <p className="text-neutral-600 mb-4">To be eligible for a return, items must meet the following conditions:</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Product is in original, unused condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All original packaging, accessories, and documentation included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No signs of wear, damage, or modification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Returned within 30 days of delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Non-Returnable Items</h3>
                <p className="text-neutral-600 mb-4">For hygiene and safety reasons, the following items cannot be returned once opened:</p>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>In-ear monitors (IEMs) and earbuds (if seal is broken)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Ear tips and ear pads (if packaging is opened)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Final sale or clearance items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0">✕</span>
                    <span>Gift cards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3">Refunds</h3>
                <p className="text-neutral-600 mb-4">
                  Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be issued to your original payment method.
                </p>
                <p className="text-neutral-600">
                  <strong>Note:</strong> Original shipping charges are non-refundable unless the return is due to our error or a defective product.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <div className="mt-12 bg-neutral-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl mb-4">Need Help?</h3>
            <p className="text-neutral-300 mb-6">
              Our customer support team is here to assist you with warranty claims, returns, or any questions about our policies.
            </p>
            <div className="space-y-2 text-neutral-300">
              <p><strong>Email:</strong> support@geek-audiophile.com</p>
              <p><strong>Phone:</strong> 1-800-GEEK-AUDIO</p>
              <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}