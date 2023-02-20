import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <p id='zero-state'>
      This is a demo for React Router.
      <br />
      Check out{" "}
      <Link to='https://reactrouter.com'>
        the docs at reactrouter.com
      </Link>
      .
    </p>
  )
}

export default Index