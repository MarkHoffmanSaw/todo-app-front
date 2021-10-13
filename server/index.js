const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

//////////////////// *** Routes *** ///////////////////

// Create a project

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all projects

// Get a project

// Update a project

// Delete a project

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
