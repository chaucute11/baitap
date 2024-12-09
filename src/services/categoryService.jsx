import {get} from "../util/request"
export const getCategory = async () =>{
  const res = await get(`products/category-list`);
  return res;
}