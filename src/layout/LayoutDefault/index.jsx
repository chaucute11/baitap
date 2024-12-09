import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import CartMini from "../../components/CartMini";
function LayoutDefault() {
  

  return (
    <>
      <div className="layout-default">
        <header className="header">
          <NavLink className="header__logo" to="/">Logo</NavLink>
          <CartMini />
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer"> 
          Copyright @ 2023 by 28Tech
        </footer>
      </div>
    </>
  )
}
export default LayoutDefault;