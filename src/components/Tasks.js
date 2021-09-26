import Task from "./Task.js";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <div className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </>
  );
};
export default Tasks;
