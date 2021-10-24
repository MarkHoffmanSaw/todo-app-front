import { useState } from "react";

const AddProject = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(""); // startDate
  const [endDate, setEndDate] = useState(""); // endDate
  const [description, setDescription] = useState(""); // description
  const [isImportant, setIsImportant] = useState(""); // isImportant

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !startDate || !endDate || !description)
      alert("All fields must be filled!");

    onAdd({ title, startDate, endDate, description, isImportant });

    setTitle("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setIsImportant(false);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={title ? "form-control" : "form-control alert"}>
        <label>Project name</label>
        <input
          type="text"
          placeholder="enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={startDate ? "form-control" : "form-control alert"}>
        <label>Start</label>
        <input
          type="date"
          placeholder="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className={endDate ? "form-control" : "form-control alert"}>
        <label>End</label>
        <input
          type="date"
          placeholder="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
      <div className="form-control__check">
        <label>Important status</label>
        <input
          type="checkbox"
          checked={isImportant}
          value={isImportant}
          onChange={(e) => setIsImportant(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn__primary" type="submit" value="To Do" />
    </form>
  );
};
export default AddProject;
