import http from "../http-common";


const getUser = id => {
  return http.get(`/user/${id}`);
};

const createUser = data => {
  return http.post("/user", data);
};

const updateUser = (id, data) => {
  return http.put(`/user/${id}`, data);
};

export default {
  getUser,
  createUser,
  updateUser
};