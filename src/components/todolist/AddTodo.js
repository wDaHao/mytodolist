import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/action'

class AddTodo extends Component {

    handleKeyUp = (e) => {
        const value = e.target.value;
        if (e.keyCode === 13 && value.trim() !== '') {
            e.target.value = '';
            if (this.props.showTag === '') {
                e.target.placeholder = '请选择分组后重新输入！';
            }
            else {
                this.props.handleAddTodo(value);
                e.target.placeholder = 'Add a todo';
            }
        }
    }

    render() {

        return (

            <div>
                <input type='text' placeholder='Add a todo'
                       onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showTag: state.showTag
});

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo(value) {
        dispatch(addTodo(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);