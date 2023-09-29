import * as actionTypes from '../actions/todoAction';

const initialState = {
    todos: [
        {
            id: 0,
            name: "Examen de Nodejs",
            description: "Hacer el examen de Nodejs",
            done: false
        },
        {
            id: 1,
            name: "Examen de React",
            description: "Hacer el examen de React",
            done: true
        },
        {
            id: 2,
            name: "Examen de Angular",
            description: "Hacer el examen de Angular",
            done: false
        }
    ]
}

const todoReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            };
        default:
            return state;
    }
}

export default todoReducer;