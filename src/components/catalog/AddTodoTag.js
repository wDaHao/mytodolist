import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTag} from '../../actions/action';

class AddTodoTag extends Component {

    handleKeyUp = (event) => {
        if (event.keyCode === 13 && event.target.value.trim() !== '') {
            this.props.addListTag(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="+创建清单"
                       onKeyUp={this.handleKeyUp}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allTodos: state.allTodos
});

const mapDispatchToProps = (dispatch) => ({
    addListTag(value) {
        dispatch(addTag(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoTag);