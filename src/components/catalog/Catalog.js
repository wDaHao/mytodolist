import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListTag from './ListTag';
import AddTodoTag from './AddTodoTag';

let count = 0;

class Catalog extends Component {

    listTag = () => {
        let tags = this.props.allTodos.map((todo) => {
            return todo.listName
        });
        return Array.from(new Set(tags));
    }

    render() {

        let tagArray = this.listTag();

        return (
            <div>
                <header>
                    <h3>Todolist</h3>
                </header>
                <section>
                    <ul>
                        {
                            tagArray.map((tag) =>
                                <ListTag
                                    key={count++}
                                    tag={tag}
                                />
                            )
                        }
                    </ul>
                </section>
                <footer>
                    <AddTodoTag/>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allTodos: state.allTodos
});

export default connect(mapStateToProps)(Catalog);