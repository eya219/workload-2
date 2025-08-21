import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://10.202.150.150:8080/stress",
});
