import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'


export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Payments</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <SignedInLinks />
                </div>
            </div>
            </nav>
        )
    }
}

export default Header