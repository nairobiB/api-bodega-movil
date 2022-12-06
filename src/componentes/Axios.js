import axios from "axios";

const Axios = axios.create({
  baseURL: "http://10.6.30.4:4001/api/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
export default Axios;
