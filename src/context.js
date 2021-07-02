import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return {
                ...state,
                tasks: state.tasks
            };
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "EDIT_TASK":
            return {
                ...state,
                task: state.tasks.map(task => task.id === action.payload.id ? (task = action.payload) : task)
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        tasks:[
            {
                id:1,
                description:'Go to the market'
            },
            {
                id:2,
                description:'Prepare lunch'
            },
            {
                id:3,
                description:'Eat my meal'
            },
            {
                id:4,
                description:'Write some code'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;