import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://10.202.52.84:8080/stress",
});
