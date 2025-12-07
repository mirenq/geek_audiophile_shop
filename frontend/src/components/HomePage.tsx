import { ArrowRight, Headphones, Speaker, Cable, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { products } from '../data/products';

export function HomePage() {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: 'Headphones',
      icon: Headphones,
      description: 'Premium over-ear & on-ear'
    },
    {
      name: 'Earbuds',
      icon: Speaker,
      description: 'True wireless & IEMs'
    },
    {
      name: 'Amplifiers',
      icon: Zap,
      description: 'Portable & desktop amps'
    },
    {
      name: 'Cables',
      icon: Cable,
      description: 'Premium audio cables'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1567787758801-42c8b5e28e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwaGVhZHBob25lcyUyMGhlcm98ZW58MXx8fHwxNzY0MDk2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-neutral-900">
              Experience Pure Sound
            </h1>
            <p className="text-xl text-neutral-900 mb-8 max-w-lg">
              Discover our curated collection of premium audio peripherals designed for audiophiles and music enthusiasts.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/products')}
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
                  className="p-8 border border-neutral-200 hover:border-neutral-900 transition-all group text-center"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                  <h3 className="mb-2">{category.name}</h3>
                  <p className="text-neutral-600">{category.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2>Featured Products</h2>
            <Button 
              variant="outline"
              onClick={() => navigate('/products')}
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="aspect-square overflow-hidden bg-neutral-100 relative">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 text-xs z-10">
                      {product.badge}
                    </span>
                  )}
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-neutral-900">{product.name}</h3>
                  <p className="text-neutral-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Fast Shipping</h3>
              <p className="text-neutral-600">Free shipping on orders over $99</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="mb-2">Expert Support</h3>
              <p className="text-neutral-600">Dedicated audio specialists ready to help</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="mb-2">30-Day Returns</h3>
              <p className="text-neutral-600">Shop with confidence, hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}