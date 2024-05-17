import axios from "axios";

const api = axios.create({
  baseURL: `${
    !process.env.HOST_URL
      ? "http://localhost:3000"
      : process.env.HOST_URL?.endsWith("/")
      ? "api"
      : "/api"
  }`,
});

export default api;
