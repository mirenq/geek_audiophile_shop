import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./lib/api";

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!slug) return;

    api
      .get(`products/?category=${slug}`)
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, [slug]);

  if (!products.length) {
    return <p className="text-center py-12">No products found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 py-12">
      {products.map((p: any) => (
        <div
          key={p.id}
          className="cursor-pointer border p-4"
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
}

