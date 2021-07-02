import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

export default class TaskCard extends Component {
    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }
    render() {
        const { id, description } = this.props.task;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="row">
                            <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12 mt-2 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-left">
                                            {description}

                                            <span style={{ float: 'right'}}>
                                                <i 
                                                    class="fas fa-trash-alt" 
                                                    style={{ color:'red', marginRight: '1rem', cursor: 'pointer'}}
                                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                                ></i>
                                            </span>
                                        </h5>
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

TaskCard.propTypes = {
    task: PropTypes.object.isRequired
}