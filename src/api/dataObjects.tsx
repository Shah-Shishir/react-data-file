import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1";

export const generateData = (size: number) =>
  axios.get(`${baseUrl}/generate-data?size=${size}`);

export const generateResults = () => axios.get(`${baseUrl}/generate-results`);
