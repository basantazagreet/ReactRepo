import './App.css';
import Hero from './Components/Hero/Hero';
import GoalList from './Components/GoalList/GoalList';
import NewGoal from './Components/NewGoal/NewGoal'
import React, { useState } from 'react';
import Workspace from './Components/Workspace/Workspace';
import ClassComponentDemo from './Components/ClassComponentDemo/ClassComponentDemo';
import PropsDemo from './Components/PropsDemo/PropsDemo';
import InputDemo from './Components/InputDemo/InputDemo';
import FormDemo from './Components/FormDemo/FormDemo';
import Login from './Components/Login/Login';
import FunctionAsPropsDemo from './Components/FunctionAsPropsDemo/FunctionAsPropsDemo';
import ComponentWillUnmountDemo from './Components/ComponentWillUnmountDemo/ComponentWillUnmountDemo';
import UseEffectDemo from './Components/UseEffectDemo/UseEffectDemo';
import Lists from './Components/Lists/Lists';
import ReusableComponent from './Components/ReusableComponentDemo/ReusableComponent';
import LiftingStateUp from './Components/LiftingStateUp/LiftingStateUp';
import UseMemoDemo from './Components/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './Components/UseRefDemo/UseRefDemo';
import HighOrderComponentDemo from './Components/HighOrderComponentDemo/HighOrderComponentDemo';

function App() {

  //Tells react the function which changes the state
  const [CourseGoals, setCourseGoals] = useState([
    { id: 'g1', text: 'Complete React' },
    { id: 'g2', text: 'Become Expert in Wordpress' },
    { id: 'g3', text: 'Apply Job at Google' }
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(CourseGoals.push(newGoal));
    // console.log(CourseGoals);
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);

    });
  };

  const runFunctionInChildComponent = () => {
    alert("Function run from parent component")
  }


  return (
    <div className="App">
      <h2>Hello World!!!</h2>

      <Hero />
      <GoalList CourseGoals={CourseGoals} />
      <NewGoal onAddGoal={addNewGoalHandler} />
      <Workspace />
      <ClassComponentDemo />
      <PropsDemo name="Basanta" other={{ contact: 9869047383, address: 'Gaindakot' }} />
      <InputDemo />
      <FormDemo />
      <Login />
      <FunctionAsPropsDemo onRun={runFunctionInChildComponent} />
      <ComponentWillUnmountDemo />
      <UseEffectDemo />
      <Lists />
      <ReusableComponent />
      <LiftingStateUp />
      <UseMemoDemo/>
      <UseRefDemo/>
      <HighOrderComponentDemo/>
    </div>
  );
}

export default App;
