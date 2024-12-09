import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./CartList.scss";
import { deleteAll } from "../../actions/cart";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function Cart() {
  const cart = useSelector(state => state.cartReducer);
  const total = cart.reduce((sum, item) => {
    const priceNew = (item.info.price - (item.info.price * item.info.discountPercentage / 100)).toFixed()
    return sum + item.quantity * priceNew;
  }, 0)
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    if (cart.length > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteAll());
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
    else {
      alert("Danh sách trống");
    }

  }
  return (
    <>
      <div className="box-head">
        <h2>Giỏ hàng</h2>
        <button onClick={handleDeleteAll}>Xoá tất cả</button>
      </div>
      {cart.length > 0 ? (
        <>
          <CartList />
          <div className="cart-total">Tổng tiền: <span>{total}$</span></div>
        </>
      ) : (
        <>Chưa có sản phẩm</>
      )
      }
    </>
  )
}
export default Cart;