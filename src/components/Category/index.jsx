import { useEffect, useState } from "react";
function Category(){
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/beauty`)
      .then(res => res.json())
      .then(data => {
        setData(data.products);
      })
  },[])
  return(
    <>
      {data.map(item =>(
        <div className="item">{item.title}</div>
      ))}
    </>
  )
}
export default Category;