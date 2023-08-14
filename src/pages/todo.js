import {useState} from "react";
import "../App.css";
import { Form, Container, Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons";

function ToDo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function createTask() {
        if(newTask.length > 0) {
            setTasks(tasks => [...tasks, newTask])
            setNewTask('');
        }
    }

    return (
        <>
            <Container className="d-flex justify-content-center mt-5">
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control
                            id="task"
                            placeholder="Enter your task"
                            onChange={e => setNewTask(e.target.value)}
                        />
                        <Button variant="outline-secondary" onClick={createTask}><FontAwesomeIcon icon={faArrowRightToBracket}/></Button>
                    </InputGroup>
                </Form>
            </Container>
            <Container className="d-flex justify-content-center">
                {tasks.map(element => {
                        return (<p>{element}</p>);
                })}
            </Container>
        </>
    );
}

export default ToDo;