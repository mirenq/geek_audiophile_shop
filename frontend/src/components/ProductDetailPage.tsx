import { useState } from 'react';
import { ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { CartItem } from '../App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { getProductById } from '../data/products';

interface ProductDetailPageProps {
  productId: string | null;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

export function ProductDetailPage({ productId, addToCart }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Get product data from products file
  const product = getProductById(productId || '1');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-neutral-600">
        Home / Products / Headphones / {product.name}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-neutral-100 overflow-hidden">
            <ImageWithFallback
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-neutral-100 overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-neutral-900' : 'border-transparent'
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl">${product.price}</span>
            <span className="text-xl text-neutral-400 line-through">${product.originalPrice}</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 text-sm">
              Save ${product.originalPrice - product.price}
            </span>
          </div>

          <p className="text-neutral-600 mb-8">
            {product.description}
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-neutral-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-neutral-100"
              >
                −
              </button>
              <span className="px-4 py-2 border-x border-neutral-200">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-neutral-100"
              >
                +
              </button>
            </div>
            <Button 
              onClick={handleAddToCart}
              size="lg" 
              className="flex-1 bg-neutral-900 hover:bg-neutral-800"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="border-t border-neutral-200 pt-8 mb-8">
            <h3 className="mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-neutral-600">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-8">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">Free Shipping</p>
                <p className="text-xs text-neutral-600">On orders over $99</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">30-Day Returns</p>
                <p className="text-xs text-neutral-600">Money-back guarantee</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm">2-Year Warranty</p>
                <p className="text-xs text-neutral-600">Full manufacturer warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="w-full justify-start border-b border-neutral-200 rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger value="specifications" className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent">
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-neutral-200">
                  <span className="text-neutral-600">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span>John Doe</span>
                  </div>
                  <p className="text-neutral-600">
                    Exceptional sound quality and comfort. Best headphones I've owned!
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}