import { useState } from "react";
import { getProducts } from "../services/products";

function ProductSearch({ setProducts }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const results = await getProducts(query);
    setProducts(results);
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default ProductSearch;
