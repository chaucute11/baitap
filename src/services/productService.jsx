import { get } from "../util/request"

export const getProductList = async () => {
  const res = await get("products");
  return res.products;
}

export const getProductCategory = async (name) => {
  const res = await get(`products/category/${name}`);
  return res;
}