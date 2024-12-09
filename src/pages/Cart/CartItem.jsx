import { useDispatch } from "react-redux";
import { updateCart, deleteItem } from "../../actions/cart"
import { useRef } from "react";
function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleUp = () => {
    dispatch(updateCart(item.id))
    inputRef.current.value++;
  }

  const handleDown = () => {
    if (inputRef.current.value > 1) {
      dispatch(updateCart(item.id, -1))
      inputRef.current.value--;
    }
  }

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  }
  return (
    <div className="cart-item" key={item.info.id}>
      <div className="cart-image">
        <img src={item.info.thumbnail} alt={item.info.title} />
      </div>
      <div className="cart-content">
        <h3 className="cart-title">{item.info.title}</h3>
        <div className="cart-price-new">{(item.info.price - (item.info.price * item.info.discountPercentage / 100)).toFixed(2)}$</div>
        <div className="cart-price-old">{item.info.price}$</div>
      </div>
      <div className="cart-quantity">
        <button onClick={handleDown}>-</button>
        <input defaultValue={item.quantity} ref={inputRef} />
        <button onClick={handleUp}>+</button>
      </div>
      <button onClick={handleDelete}>Xoá</button>
    </div>
  )
}
export default CartItem;