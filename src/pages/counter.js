import {useState} from "react";
import "../App.css";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <Container className="d-flex justify-content-center align-items-center flex-column center">
            <h1>{count}</h1>
            <Container className="d-flex justify-content-center align-items-center flex-row">
                <Button variant="secondary" onClick={increment}><FontAwesomeIcon icon={faCaretUp}/></Button>
                <Button variant="dark" onClick={decrement}><FontAwesomeIcon icon={faCaretDown}/></Button>
            </Container>
        </Container>
    );
}

export default Counter;