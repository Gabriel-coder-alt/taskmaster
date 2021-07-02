import React, { Component } from 'react';
import { Consumer } from '../context';
import PropTypes from 'prop-types';

class AddTask extends Component {
    state = {
        task:''
    }
    static propTypes = {
        task: PropTypes.string.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.name]:e.target.value })
    }

    onSubmit = ( dispatch, tasks, e ) => {
        e.preventDefault();
        const { task } = this.state;
        let length = tasks.length;
        const newTask = {
            id: length += 1,
            description: task
        };
        console.log(newTask);
        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        });
        this.setState({
            task:''
        })
    }

    render() {
        const { task } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch, tasks } = value;
                    return (
                        <div className="row">
                            <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 mt-3 mb-4 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-info">
                                        <h5 className="text-center text-white">Add Task</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit.bind(this, dispatch, tasks)}>
                                            <div className="row">
                                                    <div className="col col-10">
                                                        <input type="text" className="form-control" value={task} name="task" onChange={this.onChange} />
                                                    </div>
                                                    <button type="submit" className="btn btn-success">
                                                        <i className="fas fa-plus" style={{ float: 'right'}}></i>
                                                    </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                </div> 
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddTask;