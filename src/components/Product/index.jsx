import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService"
import "./Products.scss";
import ProductItem from "./ProductItem";
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const getProduct = await getProductList();
      setProduct(getProduct);
    }
    fetchApi();
  }, [])
  
  return (
    <>
      <div className="product">
        {product.map(item => (
         <ProductItem key={item.id} item={item} className="product-item"/>
        ))}
      </div>

    </>
  )
}
export default ProductList;