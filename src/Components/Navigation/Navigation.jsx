import React, { Component } from 'react'
import {routeOptions} from '../../App'

function Navigation({onRouteChange}) {
  return (
    <div>
        <nav style={{display: 'flex', justifyContent: "flex-end"}}>
            <p className="f3 link black dim underline pointer pa3" onClick={() => onRouteChange(routeOptions.SignIn)}>Sign out</p>
        </nav>
    </div>
)
}

export default Navigation
