import React from 'react'

function Welcome(props) {
  return (
    <div>
          <h1>Welcome {props.n}</h1>
          <h1>You are from {props.c}</h1>
    </div>
  )
}

export default Welcome
