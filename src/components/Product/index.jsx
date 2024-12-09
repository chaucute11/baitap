import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService"
import "./Products.scss";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const getProduct = await getProductList();
      setProduct(getProduct);
    }
    fetchApi();
  }, [])

  // Get category từ redux 
  const category = (useSelector()) 

  return (
    <>
      <div className="product">
        {product.map(item => (
            (item.category === category) && (
              <ProductItem key={item.id} item={item} className="product-item" />
            )
          ))
        }
      </div>

    </>
  )
}
export default ProductList;
