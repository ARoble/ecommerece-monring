import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export function fetchProducts() {
  return axios.get(`${BASE_URL}/product/`);
}
export function addProduct(body) {
  return axios.post(`${BASE_URL}/product/`, body);
}

export function deleteAProduct(id) {
  return axios.delete(`${BASE_URL}/product/${id}`);
}

export function fetchOrders() {
  return axios.get(`${BASE_URL}/order`);
}
