import React from 'react'

export default function Home({ authHandler, ...rest }) {
    return (
        <div>
            <h1>Welcome, { rest.authenticatedUser.username }</h1>
            <button onClick={authHandler}>Logout</button>
        </div>
    )
}
