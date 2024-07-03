//Big object tracks initial stores and reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: 'Hello'}],
}


export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action)=> {
            state.todos = state.todos.filter((todo) => 
                //payload vaneko function sanga aaune parameter ho
                todo.id !== action.payload)
            
        }
    }
})

//each function export
export const {addTodo, removeTodo} = todoSlice.actions

//entire reducer export
export default todoSlice.reducer