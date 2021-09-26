const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`list-item ${task.isImportant ? "important" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.title}</h3>{" "}
      <h4>
        Start: {task.startDate} | End: {task.endDate}
      </h4>
      <p>{task.description}</p>
      <button className="btn btn__danger" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
