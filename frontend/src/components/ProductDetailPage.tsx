import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { CartItem } from "../types/cart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import api from "../lib/api";

interface ProductDetailPageProps {
  productId: string | null;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function ProductDetailPage({
  productId,
  addToCart,
}: ProductDetailPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Fetch product from backend
  useEffect(() => {
    if (!productId) return;

    async function loadProduct() {
      try {
        const response = await api.get(`/catalog/products/${productId}/`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    loadProduct();
  }, [productId]);

  // Loading state
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>Loading product...</p>
      </div>
    );
  }

  const images = product.images || [];

  const handleAddToCart = () => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: images.length ? images[0].image : "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-neutral-600">
        Home / {product.category?.name} / {product.name}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-neutral-100 overflow-hidden">
            <ImageWithFallback
              src={images[selectedImage]?.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {images.map((img: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-neutral-900"
                    : "border-transparent"
                }`}
              >
                <ImageWithFallback
                  src={img.image}
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

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl">${product.price}</span>
            {product.old_price && (
              <>
                <span className="text-xl text-neutral-400 line-through">
                  ${product.old_price}
                </span>
                <span className="bg-red-100 text-red-700 px-2 py-1 text-sm">
                  Save ${product.old_price - product.price}
                </span>
              </>
            )}
          </div>

          <p className="text-neutral-600 mb-8">
            {product.short_description || product.description}
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
              <span className="px-4 py-2 border-x border-neutral-200">
                {quantity}
              </span>
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
          {product.features?.length > 0 && (
            <div className="border-t border-neutral-200 pt-8 mb-8">
              <h3 className="mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start text-neutral-600">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-8">
            <Benefit icon={<Truck />} title="Free Shipping" text="On orders over $99" />
            <Benefit icon={<RotateCcw />} title="30-Day Returns" text="Money-back guarantee" />
            <Benefit icon={<Shield />} title="2-Year Warranty" text="Full manufacturer warranty" />
          </div>
        </div>
      </div>

      {/* Specifications */}
      {product.specs && (
        <div className="mt-16">
          <Tabs defaultValue="specs">
            <TabsList className="border-b border-neutral-200 rounded-none">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b">
                    <span className="text-neutral-600">{key}</span>
                    <span>{String(value)}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 text-neutral-600">{icon}</div>
      <div>
        <p className="text-sm">{title}</p>
        <p className="text-xs text-neutral-600">{text}</p>
      </div>
    </div>
  );
}
