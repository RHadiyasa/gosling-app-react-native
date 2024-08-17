import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.137.76:3000",
});

export default axiosInstance;