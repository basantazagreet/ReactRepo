import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input , setInput] = useState('');
    const dispatch = useDispatch();


    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <div className='add-todo'>
        <form action="" onSubmit={addTodoHandler}>
            <input type="text" 
            value={input} 
            onChange={(e)=>setInput(e.target.value)} 
            placeholder='Enter a Todo'/> 

            <br />
            <button type='submit' className="main-btn">Add todo</button>
        </form>



    </div>
    
  )
}

export default AddTodo