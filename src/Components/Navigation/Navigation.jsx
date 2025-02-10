import React, { Component } from 'react'
import {routeOptions} from '../../App'

function Navigation({onRouteChange, currPage}) {
  return (
    <div>
        <nav style={{display: 'flex', justifyContent: "flex-end"}}>
          {
            currPage === routeOptions.HomeApp ? (
              <p className="f3 link black dim underline pointer pa3" onClick={() => onRouteChange(routeOptions.SignIn)}>Sign out</p>
            ) : currPage === routeOptions.SignIn ? (
              <p className="f3 link black dim underline pointer pa3" onClick={() => onRouteChange(routeOptions.Register)}>Register</p>
            ) : currPage === routeOptions.Register ? (
              <p className="f3 link black dim underline pointer pa3" onClick={() => onRouteChange(routeOptions.SignIn)}>Sign in</p>
            ) : (
              <p className="f3 link black dim underline pointer pa3"></p>
            )            
          }
        </nav>
    </div>
)}

export default Navigation
