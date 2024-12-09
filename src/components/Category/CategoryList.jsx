import { useEffect, useState } from "react";
import { getCategory } from "../../services/categoryService";

function CategoryList() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const getList = await getCategory();
      setCategory(getList);
    }
    fetchApi();
  }, [])

  console.log(category)

  const [filterCategory, setFilterCategory] = useState();

  const handleChange = (e) => {
    // update cai variable tren redux store - category = "nước hoa"
    e.preventDefault()
    dispatch(updateCart(e.target.value))
    // set category tren redux store = value mới chọn
  }

  return (
    <>
      <select onChange={handleChange}>
        {category.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  )
}

export default CategoryList;