import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { Component } from 'react';


class Bender extends React.Component {
    state = {
        clicked: false
    }


    render() {
        return (
            <Col lg={4} md={4} sm={4} >

                <Card>
                    <Card.Img onClick={this.props.click} alt="Bender" src="/images/characters/bender.png" height="400" width="200" />
                </Card>

            </Col>
        )
    }
}


export default Bender