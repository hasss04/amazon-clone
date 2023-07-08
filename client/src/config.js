import axios from "axios";

export const BACKEND =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8005";

export const api = axios.create({ withCredentials: true });
