import Cookies from 'js-cookie';
import cookie from 'cookie';

export const IsLoggedIn = (reqCookies = null) => {
  if (! reqCookies) {
    return !! Cookies.get('areta_pos_is_user_logged_in')
  }

  return !! cookie.parse(reqCookies).areta_pos_is_user_logged_in
}

export const Login = () => {
  Cookies.set('areta_pos_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'})

  window.location.href = '/';
}

export const Logout = () => {
  if (typeof window !== 'undefined') {
    Cookies.remove('areta_pos_is_user_logged_in', {expires: 86400, sameSite: 'lax'})

    window.location.href = '/login';
  }
}