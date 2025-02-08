import React from 'react'
import {routeOptions} from '../../App'

function SignIn({onRouteChange}) {
  return (
    <div className="flex items-center justify-center vh-100 ">
      <form 
        // onSubmit={handleSubmit} 
        className="pa4 br3 shadow-1"
        style={{ minWidth: '50%', minHeight: 'auto'}}
      >
        {/* input email */}
        <h2 className="f3 fw6 ph0 mh0 tc">Sign In</h2>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 bw2 hover-white hover-bg-black shadow-5"
            type="email"
            name="email-address"
            id="email-address"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* input pw */}
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">
            Password
          </label>
          <input
            className="pa2 bw2 input-reset ba hover-white hover-bg-black bg-transparent w-100 shadow-5"
            type="password"
            name="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* sign in submit button */}
        <div className="center">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Sign in"
            onClick={() => onRouteChange(routeOptions.HomeApp)}
          />
        </div>
        <div className="center">
          <p>don't have an account? Register here!</p>
        </div>
      </form>
    </div>
  )
}

export default SignIn
