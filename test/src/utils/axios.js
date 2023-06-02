import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://surgut.ritm3.ru/edu/",
});

export { axiosInstance };
