import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { products } from '../data/products';

interface CategoryPageProps {
  category: string;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const brands = ['Audio-Technica', 'Sennheiser', 'Focal', 'Audeze', 'Beyerdynamic'];
  const priceRanges = ['Under $100', '$100 - $300', '$300 - $500', '$500+'];

  // Filter products by category
  let categoryProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  // Apply price range filters
  if (selectedPriceRanges.length > 0) {
    categoryProducts = categoryProducts.filter(product => {
      return selectedPriceRanges.some(range => {
        if (range === 'Under $100') return product.price < 100;
        if (range === '$100 - $300') return product.price >= 100 && product.price <= 300;
        if (range === '$300 - $500') return product.price >= 300 && product.price <= 500;
        if (range === '$500+') return product.price > 500;
        return false;
      });
    });
  }

  // Apply sorting
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      default: // featured
        return 0;
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const togglePriceRange = (range: string) => {
    setSelectedPriceRanges(prev =>
      prev.includes(range)
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-neutral-600">
        Home / Products / {category}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="mb-2">{category}</h1>
          <p className="text-neutral-600">Showing {sortedProducts.length} products</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Select defaultValue="featured" onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="space-y-8 sticky top-24">
              {/* Brand Filter */}
              <div>
                <h3 className="mb-4">Brand</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <Label
                        htmlFor={brand}
                        className="ml-2 text-neutral-700 cursor-pointer"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="mb-4">Price Range</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <div key={range} className="flex items-center">
                      <Checkbox
                        id={range}
                        checked={selectedPriceRanges.includes(range)}
                        onCheckedChange={() => togglePriceRange(range)}
                      />
                      <Label
                        htmlFor={range}
                        className="ml-2 text-neutral-700 cursor-pointer"
                      >
                        {range}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-600">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
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
                    <p className="text-xs text-neutral-500 mb-1">{product.category}</p>
                    <h3 className="mb-2 text-neutral-900">{product.name}</h3>
                    <p className="text-neutral-900">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}