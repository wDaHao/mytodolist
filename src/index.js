import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import TodoApp from './TodoApp';
import todoReducer from './reducer/todoReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer, {
    allTodos: [
        {
            listName: 'todolist1',
            id: 0,
            text: 'todo1',
            completed: true,
            planTime: null
        },
        {
            listName: 'todolist2',
            id: 1,
            text: 'todo2',
            completed: true,
            planTime: null
        },
        {
            listName: 'todolist2',
            id: 2,
            text: 'todo3',
            completed: false,
            planTime: null
        },
        {
            listName: 'todolist1',
            id: 3,
            text: 'todo4',
            completed: false,
            planTime: null
        }
    ],
    showTag: ''
});

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
