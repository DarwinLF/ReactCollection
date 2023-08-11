import React from "react";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["Hola", "mundo"]
        }
    }

    addNewItem = () => {
        this.setState({items: [...this.state.items, "Jose"] })
    }

    render() {
        return (
            <div>
                <input id="newItem"/>
                <button onClick={this.addNewItem}>Ingregar</button>
                <ul>
                    {this.state.items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDo;