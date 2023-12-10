import GoalCard from "./Components/Goal Form/GoalCard.js";
import GoalList from "./Components/Goal Display/GoalList.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [goals, setStateOfGoalArray] = useState([]);

  function goalSubmissionHandler(inputGoal) {
    setStateOfGoalArray((prevState) => [
      { id: Math.random().toString(), text: inputGoal },
      ...prevState,
    ]);
  }

  function goalDeletionHandler(delID) {
    setStateOfGoalArray((prevState) =>
      prevState.filter((goal) => goal.id !== delID)
    );
  }

  return (
    <div className="main">
      <GoalCard onGoalSubmit={goalSubmissionHandler} />
      <GoalList goalsDataList={goals} onDelete={goalDeletionHandler} />
    </div>
  );
}

export default App;
