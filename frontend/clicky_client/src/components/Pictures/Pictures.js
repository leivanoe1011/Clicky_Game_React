import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Fry from "../Characters/Fry";
import Leela from "../Characters/Leela";
import Bender from "../Characters/Bender";
import Amy from "../Characters/Amy";
import Hermes from "../Characters/Hermes";
import Professor from "../Characters/Professor";
import Zoidberg from "../Characters/Zoidberg";
import React, { Component } from 'react';
import "./pictures.css";

class Pictures extends Component {


    shuffle = (c) => {
        c.sort((a, b) => {
            return 0.5 - Math.random();
        })

        return c;
    }

    handleClick = (e) => {
        e.preventDefault();

        this.shuffle(this.state.charArr);

        console.log(e.target.alt);

        this.forceUpdate();
    }
    
    state = {
        charArr: [
            <Fry click={this.handleClick} />,
            <Leela click={this.handleClick} />,
            <Zoidberg click={this.handleClick} />,
            <Amy click={this.handleClick} />,
            <Professor click={this.handleClick} />,
            <Hermes click={this.handleClick} />,
            <Bender click={this.handleClick} />
        ]
    }

    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.charArr
                    }
                </Row>
            </Container>
        );
    }
}


export default Pictures