import React, { Component } from 'react';
import { todos } from './../../todos.json';

console.log(todos);

class Notes extends Component {

    constructor() {
        super();
        localStorage.setItem("usuarios", JSON.stringify(todos))
        this.state = {
            todos: JSON.parse(localStorage.getItem("usuarios"))
        };
    }

    render() {
        const { todos } = this.state;
        const lista = todos.map((usuario,i) =>
            <li className="list-group-item" key={i}>{usuario.nombre}</li>
        );

        return (
            <div> {this.state.title} - {this.state.ntareas}
                < div className="container" >
                    <ul className="list-group">
                        {lista}
                    </ul>
                </div >
            </div>
        );
    }
}

export default Notes;
