import { useEffect, useState } from "react"
import api from "../api/api"
import ProductSearch from "../components/ProductSearch"

function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.get("catalog/products/")
      .then(res => setProducts(res.data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <ProductSearch setProducts={setProducts} />

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
