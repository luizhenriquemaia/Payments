import React, { Component } from 'react'


export default class SignedInLinks extends Component {
    render() {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <a href="#" className="nav-link">
                    New Payment
                    </a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    Calender
                    </a>
                </li>
                <li className="nav-item">
                <a href="#" className="nav-link">
                    Sign Out
                    </a>
                </li>
            </ul>
        )
    }
}