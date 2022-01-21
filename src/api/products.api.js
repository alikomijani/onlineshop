import axios from "./setup";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/api/products")
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};

export const createProduct = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/products", data)
      .then((data) => resolve(data))
      .catch((e) => reject(e.response));
  });
};
