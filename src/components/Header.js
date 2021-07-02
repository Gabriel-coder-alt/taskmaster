import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <a className="navbar-brand text-white" href="/">Task Master</a>
                </nav>
            </div>
        )
    }
}
