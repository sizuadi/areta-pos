import api from "../Util/api";

export const sanctumConfig = {
  apiUrl: 'http://localhost:8000',
  csrfCookieRoute: "sanctum/csrf-cookie",
  signInRoute: "login",
  signOutRoute: "logout",
  userObjectRoute: "api/me",
  axiosInstance: api(),
}