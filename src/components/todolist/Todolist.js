import React, {Component} from 'react';
import {connect} from 'react-redux';
import UncompletedTodo from './UncompletedTodo';
import CompletedTodo from './CompletedTodo';
import {addTodo} from "../../actions/action";

class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            sortTodo: [],
            orderTodo: 'default'
        })
    }

    handleSort = () => {
        if (this.state.orderTodo === 'default') {
            this.setState = ({
                sortTodo: this.props.allTodos.sort(),
                orderTodo: 'aTOz'
            })
        }
        else if (this.state.orderTodo === 'aTOz') {
            this.setState = ({
                orderTodo: 'default'
            })
        }
    }

    render() {
        let showTodo = (this.state.orderTodo === 'default' ? this.props.allTodos : this.state.sortTodo)
        return (

            <div>
                <ul>
                    {
                        this.props.allTodos.map((todo) => {
                            if (todo.listName === this.props.showTag && !todo.completed && (todo.id > -1))
                                return <UncompletedTodo
                                    key={todo.id}
                                    {...todo}
                                />
                        })
                    }
                </ul>
                <input type='button' value='显示/隐藏已完成任务'/>
                <ul>
                    {
                        this.props.allTodos.map((todo) => {
                            if (todo.listName === this.props.showTag && todo.completed && (todo.id > -1))
                                return <CompletedTodo
                                    key={todo.id}
                                    {...todo}
                                />
                        })
                    }
                </ul>
                <button onChange={this.handleSort}>排序</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allTodos: state.allTodos,
    showTag: state.showTag
})

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo(value) {
        dispatch(addTodo(value));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);