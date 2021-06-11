import http from "../http-common";

const getAllAdverts = () => {
  return http.get("/adverts");
};

const getAdvert = id => {
  return http.get(`/adverts/${id}`);
};

const createAdvert = data => {
  return http.post("/adverts", data);
};

const updateAdvert = (id, data) => {
  return http.put(`/adverts/${id}`, data);
};

const removeAdvert = id => {
  return http.delete(`/adverts/${id}`);
};

const removeAllAdverts = (id) => {
  return http.delete(`/adverts/${id}`);
};

const findByCategoriesAdverts = cat => {
  return http.get(`/adverts?category=${cat}`);
};

export default {
  getAllAdverts,
  getAdvert,
  createAdvert,
  updateAdvert,
  removeAdvert,
  removeAllAdverts,
  findByCategoriesAdverts
};