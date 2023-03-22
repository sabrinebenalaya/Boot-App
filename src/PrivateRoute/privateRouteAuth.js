import React from 'react'
import {Navigate} from 'react-router-dom'

function PrivateRouteAuth({children}) {
    const isAuth =false
  return (
    <div>{isAuth ? children : <Navigate to='/login'/>}</div>
  )
}

export default PrivateRouteAuth