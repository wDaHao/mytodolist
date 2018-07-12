let nowId = 4;

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TAG":
            return {
                allTodos: [
                    ...state.allTodos,
                    {
                        listName: action.tag,
                        id: -1,
                        text: '',
                        completed: false,
                        planTime: null
                    }
                ],
                showTag: state.showTag
            };

        case "SWITCH_TAG":
            return {
                allTodos: state.allTodos,
                showTag: action.tag
            };

        case "ADD_TODO":
            return {
                allTodos: [
                    ...state.allTodos,
                    {
                        listName: state.showTag,
                        id: nowId++,
                        text: action.value,
                        completed: false,
                        planTime: null
                    }
                ],
                showTag: state.showTag
            };

        case "TOGGLE_TODO":
            return {
                allTodos: state.allTodos.map((todo) => todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo),
                showTag: state.showTag
            }

        default:
            return state
    }
};

export default todoReducer;