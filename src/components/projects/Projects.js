import Project from "./Project.js";

const Projects = ({ projects, onDelete, onToggle }) => {
  return (
    <>
      <div className="list">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </>
  );
};
export default Projects;
