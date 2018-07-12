import React, {Component} from 'react';
import {connect} from 'react-redux';
import {switchTag} from '../../actions/action';

class ListTag extends Component {

    handleClick = () => {
        this.props.changeTag(this.props.tag);
    }

    tagNum = () => {
        return this.props.allTodos.filter((todo) =>
            (todo.listName === this.props.tag) && (todo.id > -1)
        ).length;
    }

    render() {

        return (
            <li onClick={this.handleClick}>
                <span>{this.props.tag}</span>
                <span>{this.tagNum()}</span>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    allTodos: state.allTodos
})

const mapDispatchToProps = (dispatch) => ({
    changeTag(tag) {
        dispatch(switchTag(tag));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTag);