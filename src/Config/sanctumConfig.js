import api from "../Util/api";

export const sanctumConfig = {
  apiUrl: process.env.REACT_APP_BASE_URL,
  csrfCookieRoute: process.env.REACT_APP_SANCTUM_CSRF_ROUTE,
  signInRoute: process.env.REACT_APP_SANCTUM_LOGIN_ROUTE,
  signOutRoute: process.env.REACT_APP_SANCTUM_LOGOUT_ROUTE,
  userObjectRoute: process.env.REACT_APP_SANCTUM_USER_ROUTE,
  axiosInstance: api(),
}