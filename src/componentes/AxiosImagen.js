import axios from "axios";

const AxiosImagen = axios.create({
  baseURL: "http://192.168.0.13:4001/api/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
export default AxiosImagen;
