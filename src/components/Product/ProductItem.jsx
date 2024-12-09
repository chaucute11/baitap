import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../actions/cart"
import { useNavigate } from "react-router-dom";
function ProductItem(props) {
  const { item } = props;
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (cart.some(itemCart => itemCart.id === item.id)) {
      dispatch(updateCart(item.id));
    }
    else {
      dispatch(addToCart(item.id, item));
    }
  }
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }
  return (
    <>
      <div className="product-item" key={item.id}>
        <div className="product-image" onClick={() => handleClick(item.id)}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="product-title">{item.title}</div>
        <div className="product-price-new">{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}$</div>
        <div className="product-price-old">{item.price}$</div>
        <div className="product-discount">{item.discountPercentage}%</div>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </>
  )
}
export default ProductItem;