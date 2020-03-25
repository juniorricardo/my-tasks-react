import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                { this.props.titulo }
            </a>
            <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        </nav>
        )
    }
}

export default Navigation;