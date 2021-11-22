import Tasks from "./tasks/Tasks";
import { useState } from "react";

const Project = ({ project, onDelete, onToggle }) => {
  const [onDetails, setOnDetails] = useState(false);

  return (
    <div
      className={`list-item ${project.isImportant ? "important" : ""}`}
      onDoubleClick={() => onToggle(project.id)}
    >
      <h3>
        #{project.id} - {project.title}
      </h3>
      <h5>Start: {project.startDate}</h5>
      <h5>End: {project.endDate}</h5>
      <p>{project.description}</p>

      {/* TASK */}
      <button
        className="btn btn__primary"
        onClick={() => setOnDetails(!onDetails)}
      >
        Details
      </button>
      {onDetails && <Tasks project={project} />}
      {/* /////////////////////// */}

      <button className="btn btn__danger" onClick={() => onDelete(project.id)}>
        Delete
      </button>
    </div>
  );
};

export default Project;
