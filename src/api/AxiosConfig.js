import axios from "axios";

export const axiosJson = () => {
  return axios.create({
    headers: { "Content-Type": "application/json" },
  });
};

export const axiosFiles = () => {
  return axios.create({
    headers: { "content-type": "multipart/form-data" },
  });
};
