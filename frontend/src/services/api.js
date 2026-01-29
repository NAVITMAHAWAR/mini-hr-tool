import axios from "axios";

// Determine API base URL based on environment
const apiBaseURL =
  process.env.NODE_ENV === "production"
    ? "https://mini-hr-tool-s3i6.onrender.com" // Production backend
    : "http://localhost:5000"; // Development backend

const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true, // Allow cookies for authentication
});

// Add request interceptor for token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
