import React, {Component} from 'react';
import './App.css';
import Catalog from './components/catalog/Catalog';
import AddTodo from './components/todolist/AddTodo';
import Todolist from './components/todolist/Todolist';

class TodoApp extends Component {

    render() {

        return (
            <div className="App">
                <nav>
                    <Catalog/>
                </nav>
                <main>
                    <AddTodo/>
                    <ul>
                        <Todolist/>
                    </ul>
                </main>
            </div>
        );
    }
}

export default TodoApp;
