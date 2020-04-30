import React, { Component, Fragment } from 'react'


export default class Payments extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2 className="title">Payments</h2>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Venc</th>
                                <th scope="col">Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Luz</td>
                                <td>Account ref. April</td>
                                <td>30/04/2020</td>
                                <td>button</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Água</td>
                                <td>Account ref. April</td>
                                <td>30/04/2020</td>
                                <td>button</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Luz</td>
                                <td>Account ref. April</td>
                                <td>30/04/2020</td>
                                <td>button</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}