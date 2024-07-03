import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {

    // state of todos reducer(val in store) and Array todos(initialState)
    const todos = useSelector(state => state.todos.todos) ;
    console.log(todos);

    const dispatch = useDispatch();
    

  return (

    <div className="todos">

        <h2>Todos</h2>
        {todos && todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                           <span>{todo.text}</span> 
                            <button onClick={() => dispatch(removeTodo(todo.id)) } className="del-btn">Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos yet.</p>
            )}
        
    </div>
    
  )
}

export default Todos