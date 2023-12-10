import GoalForm from "./GoalForm";
import "./GoalCard.css";

function GoalCard(props) {
  return (
    <div className="form-card">
      <GoalForm onGoalSubmit={props.onGoalSubmit} />
    </div>
  );
}

export default GoalCard;
