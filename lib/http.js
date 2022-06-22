import axios from "axios";

const Http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default Http;
