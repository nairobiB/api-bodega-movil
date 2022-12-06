import axios from "axios";

const Axios = axios.create({
  baseURL: "http://192.168.56.1:4001/api/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
export default Axios;
