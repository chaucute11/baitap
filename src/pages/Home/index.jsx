import Category from "../../components/Category";
import CategoryList from "../../components/Category/CategoryList";
import ProductList from "../../components/Product";
function Home() {
  
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <CategoryList />
      <ProductList />
    </>
  )
}
export default Home;