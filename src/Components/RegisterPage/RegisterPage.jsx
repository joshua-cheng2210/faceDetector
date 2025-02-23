import React from 'react'
import PropTypes from 'prop-types';
import {routeOptions} from '../../App'

class RegisterPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handlesubmit = (event) => {
    
  }

  render() {
    const { onRouteChange } = this.props;
    const { email, password } = this.state;
    return (
      <div className="flex items-center justify-center vh-50">
            <form 
              className="pa4 br3 shadow-1"
              style={{ minWidth: '50%', minHeight: 'auto'}}
              onSubmit={this.handleSubmit} // Use onSubmit to handle form submission
            >
              <h2 className="f3 fw6 ph0 mh0 tc">Registration</h2>
              {/* input email */}
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw2 hover-white hover-bg-black shadow-5"
                  type="text"
                  required
                />
              </div>
              {/* input email */}
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 bw2 hover-white hover-bg-black shadow-5"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={email}
                  onChange={this.handleEmailChange}
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
                  value="Register"
                  onClick={() => onRouteChange(routeOptions.SignIn)}
                />
              </div>
            </form>
          </div>
    )
  }
}


RegisterPage.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
};

export default RegisterPage
