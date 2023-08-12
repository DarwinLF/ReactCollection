import React from "react";
import "../css/counter.css";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <Container>
                <h1 style={{color: "white"}}>{this.state.count}</h1>
                <Button variant="secondary" onClick={this.increment}><FontAwesomeIcon icon={faCaretUp}/></Button>
                <Button variant="dark" onClick={this.decrement}><FontAwesomeIcon icon={faCaretDown}/></Button>
            </Container>
        );
    }
}

export default Counter;