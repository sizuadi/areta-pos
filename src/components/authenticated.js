import React from 'react'
import {IsLoggedIn} from '../utilities/Auth'
import redirectTo from '../utilities/redirectTo'

export default function authenticated(Component) {
  IsLoggedIn();
  const AuthComponent = (props) => {
    return <Component {...props} />
  }

  AuthComponent.getInitialProps = (context) => {
    const isUserLoggedIn = IsLoggedIn(context?.req?.headers?.cookie || '')

    if (isUserLoggedIn) {
      redirectTo('/', context)
    }

    return {user: {isLoggedIn: isUserLoggedIn}}
  }

  return AuthComponent
}
