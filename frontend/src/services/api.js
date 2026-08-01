import axios from "axios";

const api = axios.create({
  baseURL: "https://mini-hr-tool-s3i6.onrender.com/api",
});

export default api;
