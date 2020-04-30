import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
// Components
import Header from './layout/Header'
import Payments from './payments/Payments'

class App extends Component {
    render() {
        return (
            <Fragment>  
                <Header />
                <Payments />
            </Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app')) 