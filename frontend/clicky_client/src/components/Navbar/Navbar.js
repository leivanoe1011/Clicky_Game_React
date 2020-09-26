import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";


class Nav extends Component {


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                   clicky game
        </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Nav