import "./GoalList.css";

export default function GoalList(props) {
  function goalDeletionHandler(event) {
    //user may click area inside goalist-container but not on the goals row for eg: space between two goals row or any padding belonging to goalist-container
    if (event.target.hasAttribute("id")) {
      const delID = event.target.id;
      props.onDelete(delID);
    }
  }

  const goalsHtmlList = props.goalsDataList.map((goal) => {
    return (
      <div key={goal.id} id={goal.id}>
        {goal.text}
      </div>
    );
  });

  return (
    <div className="goallist-container" onClick={goalDeletionHandler}>
      {goalsHtmlList}
    </div>
  );
}
