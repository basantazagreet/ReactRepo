import React from "react";

const GoalList = (props) => {
    //Injecting props values of GoalList
    return (
        <div><h1>Two GoalList</h1>
            <ul>
                {props.CourseGoals.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>;  
                })}
            </ul>
        </div>
    );
};

export default GoalList;
