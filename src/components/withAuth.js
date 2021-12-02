import React from 'react'
import {IsLoggedIn} from '../utilities/Auth'
import redirectTo from '../utilities/redirectTo'

export default function withAuth(Component) {
  const AuthComponent = (props) => {
    return <Component {...props} />
  }

  AuthComponent.getInitialProps = (context) => {
    const isUserLoggedIn = IsLoggedIn(context?.req?.headers?.cookie || '')

    console.log(isUserLoggedIn, context);

    if (!isUserLoggedIn) {
      redirectTo('/login', context)
    }

    return {user: {isLoggedIn: isUserLoggedIn}}
  }

  return AuthComponent
}
