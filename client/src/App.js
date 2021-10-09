import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Navigation
import Navbar from "./components/navigation/Navbar.js";

// App
import Header from "./components/Header.js";
import AddProject from "./components/projects/AddProject.js";
import Projects from "./components/projects/Projects.js";
import Footer from "./components/Footer.js";

// Directions to links
import Main from "./components/links/Main.js";
import Feauters from "./components/links/Feauters.js";
import Creators from "./components/links/Creators.js";

function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [projects, setProjects] = useState([]);

  // 1. New async function inside the useEffect hook [!]
  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects();
      setProjects(projectsFromServer);
    };

    getProjects(); // 3. Call the function after fetching
  }, []);

  // 2. Fetch data from local server
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/projects");
    const data = await res.json();

    return data; // Array all tasks
  };

  const fetchProject = async (id) => {
    const res = await fetch(`http://localhost:5000/projects/${id}`);
    const data = await res.json();

    return data; // Array project[id]
  };

  // Add a project
  const addProject = async (project) => {
    if (
      project.title &&
      project.startDate &&
      project.endDate &&
      project.description
    ) {
      const res = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(project),
      });

      const data = await res.json();
      setProjects([...projects, data]);
    }

    // *** For UI only (without connection with a server) ***
    // if (task.title && task.startDate && task.endDate && task.description) {
    //   const id = Math.floor(Math.random() * 10000) + 1;
    //   const newTask = { id, ...task };
    //   setTasks([...tasks, newTask]);
    // }
  };

  // Delete a project
  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/projects/${id}`, { method: "DELETE" });

    setProjects(projects.filter((project) => project.id !== id));
  };

  // Toggle important
  const toggleImportant = async (id) => {
    const projectToToggle = await fetchProject(id);
    const updProject = {
      ...projectToToggle,
      isImportant: !projectToToggle.isImportant,
    };

    const res = await fetch(`http://localhost:5000/projects/${id}`, {
      // upd on the local server
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updProject),
    });

    const data = await res.json();

    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, isImportant: data.isImportant }
          : project
      )
    );
  };

  return (
    <Router>
      <div id="nav">
        <Navbar />
      </div>

      <Route path="/" exact render={Main} />

      {/* APP */}

      <Route
        path="/start"
        exact
        render={(props) => (
          <>
            <div className="container">
              <Header
                onToggle={() => setFormStatus(!formStatus)}
                btnTitle={
                  formStatus ? "Close the form" : "Create a new project"
                }
              />
              {formStatus && <AddProject onAdd={addProject} />}
              <hr />
              {projects.length > 0 ? (
                <Projects
                  projects={projects}
                  onDelete={deleteProject}
                  onToggle={toggleImportant}
                />
              ) : (
                <h3>No active projects</h3>
              )}
              <Footer />
            </div>
          </>
        )}
      />

      {/* FEAUTERS */}

      <Route path="/feauters" component={Feauters} />

      {/* CREATORS */}

      <Route path="/creators" component={Creators} />
    </Router>
  );
}

export default App;
