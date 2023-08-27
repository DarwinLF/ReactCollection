import {useState} from "react";
import "../App.css";
import { Form, Container, Button, InputGroup, ListGroup, FormCheck } from "react-bootstrap";
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

    function deleteTask(removeTask) {
        let removeIndex = tasks.findIndex(task => task === removeTask);
        let newList = [...tasks];

        newList.splice(removeIndex, 1);
        setTasks(newList);
    }

    return (
        <Container className="col-md-5">
            <Container className="d-flex justify-content-center mt-5">
                <Form>
                    <InputGroup className="mb-3">
                        <Form.Control
                            id="task"
                            placeholder="Enter your task"
                            value={newTask}
                            onChange={e => setNewTask(e.target.value)}
                        />
                        <Button variant="outline-secondary" onClick={createTask}><FontAwesomeIcon icon={faArrowRightToBracket}/></Button>
                    </InputGroup>
                </Form>
            </Container>
            <Container className="mt-3">
                <ListGroup>
                    {tasks.map(task => {
                            return (
                                <ListGroup.Item className="d-flex justify-content-between align-items-start mt-1" variant="dark">
                                    <Container className="align-self-center">
                                        {task}
                                    </Container>
                                    <div className="d-flex flex-row">
                                        <FormCheck className="align-self-center"/>
                                        &nbsp;
                                        <Button variant="danger" onClick={() => deleteTask(task)}>Delete</Button>
                                    </div>
                                </ListGroup.Item>
                            );
                    })}
                </ListGroup>
            </Container>
        </Container>
    );
}

export default ToDo;