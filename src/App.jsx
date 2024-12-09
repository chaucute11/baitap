import './App.css'
import LayoutDefault from "./layout/LayoutDefault";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import ProductDetail from './components/Product/ProductDetail';
import Category from './components/Category';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />} >
          <Route index element={<Home />} />
          <Route path='product/:id' element={<ProductDetail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='category/:name' element={<Category />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
