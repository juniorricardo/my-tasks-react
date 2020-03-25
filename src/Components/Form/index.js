import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
    }
    render() {
        return (
            <div className="miFormulario ml-4">
                <div className="card mt-4">
                    <div className="card-heard">
                        <h3>Nueva tarea</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                name="title"
                                placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                name="responsible"
                                placeholder="Responsible" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                name="description"
                                placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                name="priority"
                                placeholder="Priority" />
                        </div>
                        <button className="btn btn-lg btn-block btn-primary"
                            type="submit"> Save </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;