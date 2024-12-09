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
  const handleChange = (e) => {
    console.log(e.target.value);
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