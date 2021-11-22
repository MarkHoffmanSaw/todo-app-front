import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // description

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) alert("All fields must be filled!");

    onAdd({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={title ? "form-control" : "form-control alert"}>
        <label>Task title</label>
        <input
          type="text"
          placeholder="enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={description ? "form-control" : "form-control alert"}>
        <label>Description</label>
        <input
          type="text"
          placeholder="add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <input className="btn btn__primary" type="submit" value="Add task" />
    </form>
  );
};
export default AddTask;
