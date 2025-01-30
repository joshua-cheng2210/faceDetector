import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
        <div>
            <nav style={{display: 'flex', justifyContent: "flex-end"}}>
                <p className="f3 link black dim underline pointer pa3">This is the navigation bar</p>
            </nav>
        </div>
    )
  }
}

export default Navigation
