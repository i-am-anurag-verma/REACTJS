import React,{useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals]  = useState([
    { id: 'cg1', text: 'Finish this course'},
    { id: 'cg2', text: 'Learn all about the course main topic'},
    { id: 'cg3', text: 'Help other students in the course Q&A'}
  ]);

 // git status checked 
  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);

    });
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList  goals={ courseGoals}/>
    </div>
  );
}

// hey test from server

export default App;
