import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, updateCart } from "../../actions/cart";

function ProductDetail() {
  const param = useParams();
  const [item, setData] = useState();
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [param])
  const handleAddToCart = () => {
    if (cart.some(itemCart => itemCart.id === item.id)) {
      dispatch(updateCart(item.id));
    }
    else {
      dispatch(addToCart(item.id, item));
    }
  }
  return (
    <>
      {item && (
        <>
          <div className="product-item" key={item.id} >
            <div className="product-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product-title">{item.title}</div>
            <div className="product-price-new">{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}$</div>
            <div className="product-price-old">{item.price}$</div>
            <div className="product-discount">{item.discountPercentage}%</div>
            <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
          </div>
        </>
      )}
    </>
  )
}
export default ProductDetail;