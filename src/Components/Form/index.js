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
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
      const {value,name} = e.target;
      this.setState({
        [name]: value
      })
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.onAddTodo(this.state);
      alert("Sending...");
    }

    render() {
        return (
            <div className="miFormulario">
                <div className="card">
                    <h3>New task</h3>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input className="form-control"
                                  type="text"
                                  name="title"
                                  onChange={this.handleInput}
                                  placeholder="Title" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                  type="text"
                                  name="responsible"
                                  onChange={this.handleInput}
                                  placeholder="Responsible" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                  type="text"
                                  name="description"
                                  onChange={this.handleInput}
                                  placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <select className="form-control"
                                  name="priority"
                                  onChange={this.handleInput}>
                                  <option>low</option>
                                  <option>medium</option>
                                  <option>hight</option>
                            </select>
                        </div>
                        <button className="btn btn-lg btn-block btn-primary"
                            type="submit"> Save </button>
                   </form>
                </div>
            </div>
        )
    }
}

export default Form;
