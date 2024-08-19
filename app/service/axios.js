import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.14.31.4:3000",
});

export default axiosInstance;