const local = "http://dummyjson.com/";
export const get = async (path) => {
  const response = await fetch(local + path);
  const result = await response.json();
  return result;
}

