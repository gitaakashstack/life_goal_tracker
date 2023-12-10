import "./GoalForm.css";
import { useState } from "react";

function GoalForm(props) {
  const [inputData, setStateOfInputFormData] = useState("");
  const [isInputValid, setStateOfInputValidity] = useState(true);

  function inputChangeHandler(event) {
    if (event.target.value.trim()) {
      setStateOfInputValidity(true);
    }
    setStateOfInputFormData(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    if (!inputData.trim()) {
      setStateOfInputValidity(false);
    } else {
      props.onGoalSubmit(inputData);
      setStateOfInputFormData("");
      setStateOfInputValidity(true);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`input-elements-wrapper ${
          isInputValid ? "" : "invalid-input"
        }`}
        onChange={inputChangeHandler}
      >
        <div>
          <label for="goal">Life Goal</label>
          <input type="text" id="goal" value={inputData}></input>
        </div>
      </div>
      <div className="button">
        <button type="submit">
          <span>Add Goal</span>
        </button>
      </div>
    </form>
  );
}

export default GoalForm;
