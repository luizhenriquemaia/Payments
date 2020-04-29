import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
// Components
import Header from './layout/Header'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Teste App</h1>
                </div>
            </Fragment>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app')) 