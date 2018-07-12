import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../../actions/action';

class CompletedTodo extends Component {

    handleTodoState = (id) => {
        this.props.dispatch(toggleTodo(id))
    }

    render() {

        return (

            <li>
                <input type='checkbox'
                       checked={this.props.completed}
                       onChange={() => this.handleTodoState(this.props.id)}
                />
                <span>
          {this.props.text}
        </span>
            </li>
        )
    }
}

export default connect()(CompletedTodo);