import React, { Component } from 'react';
import { Consumer } from '../context';
import TaskCard from './TaskCard';
import AddTask from './AddTask';

export default class Tasks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { tasks } = value;
                    return (
                        <React.Fragment>
                            <AddTask />
                            {tasks.map(task => (<TaskCard key={task.id} task={task} />))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        )
    }
}
