import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="list">
      {tasks.map((task) => (
        <Task key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
