import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Navigation
import Navbar from "./components/navigation/Navbar.js";

// App
import Header from "./components/Header.js";
import AddTask from "./components/AddTask.js";
import Tasks from "./components/Tasks.js";
import Footer from "./components/Footer.js";

// Directions to links
import Main from "./components/links/Main.js";
import Feauters from "./components/links/Feauters.js";
import Creators from "./components/links/Creators.js";

function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [tasks, setTasks] = useState([]);

  // 1. New async function inside the useEffect hook [!]
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks(); // 3. Call the function after fetching
  }, []);

  // 2. Fetch data from local server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data; // Array all tasks
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data; // Array task[id]
  };

  // Add a task
  const addTask = async (task) => {
    if (task.title && task.startDate && task.endDate && task.description) {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      setTasks([...tasks, data]);
    }

    // *** For UI only ***
    // if (task.title && task.startDate && task.endDate && task.description) {
    //   const id = Math.floor(Math.random() * 10000) + 1;
    //   const newTask = { id, ...task };
    //   setTasks([...tasks, newTask]);
    // }
  };

  // Delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle important
  const toggleImportant = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, isImportant: !taskToToggle.isImportant };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      // upd on the local server
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isImportant: data.isImportant } : task
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
                btnTitle={formStatus ? "Close the form" : "Create a new task"}
              />
              {formStatus && <AddTask onAdd={addTask} />}
              <hr />
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleImportant}
                />
              ) : (
                <h3>No active tasks</h3>
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
