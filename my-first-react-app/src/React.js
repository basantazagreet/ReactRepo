1) Use State in an string:
const [enteredText, setEnteredText] = useState('');

2) Use state in array
  //Tells react the function which changes the state
  const [CourseGoals, setCourseGoals] = useState([
    {id:'g1', text:'Complete React'},
    {id: 'g2', text:'Become Expert in Wordpress'},
    {id: 'g3', text:'Apply Job at Google'}
  ]);

  const addNewGoalHandler = newGoal => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);

    });
  };


3)Map through array passed as prop to display in </li>

<ul>
                {props.CourseGoals.map((goal) => {
                    return <li key={goal.id}>{goal.text}</li>;  
                })}
            </ul>


4) Event target in a textbox:
const onTextChangeHandler = (event) => {
    setEnteredText(event.target.value);
};