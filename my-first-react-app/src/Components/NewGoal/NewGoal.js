import React, { useState } from "react";
import './NewGoal.css';

//Function referenced through props
const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    //button ko click event
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: 3,
            text: enteredText
        };

        //App ko function call
        props.onAddGoal(newGoal);
        setEnteredText('');
    }

    //Text change using prop
    const onTextChangeHandler = (event) => {
        setEnteredText(event.target.value);
    };


    return (
        <>
            <h1>Three Newgoal</h1>
            <form onSubmit={addGoalHandler} className="add-new-goal-form">
                <input type="text" value={enteredText} onChange={onTextChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </>

    );
}

export default NewGoal;