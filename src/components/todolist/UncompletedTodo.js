import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../../actions/action';

class UncompletedTodo extends Component {

    handleTodoState = (id) => {
        this.props.dispatch(toggleTodo(id));
    }

    render() {

        return (

            <li>
                <input type='checkbox'
                       onChange={() => {
                           this.handleTodoState(this.props.id)
                       }}
                       checked={this.props.completed}
                />
                <span>
          {this.props.text}
        </span>
            </li>
        );
    }
}


export default connect()(UncompletedTodo);