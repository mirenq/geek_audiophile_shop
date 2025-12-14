import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    image: string;
    rating?: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition">
        <div className="w-full h-56 bg-neutral-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>

          <p className="text-neutral-900 text-xl font-semibold mt-1">
            ${product.price}
          </p>

          {product.rating && (
            <p className="text-sm text-neutral-500 mt-1">
              ⭐ {product.rating.toFixed(1)}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
