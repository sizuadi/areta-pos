import axios from 'axios'

export default function api() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true
  });

  return api;
}