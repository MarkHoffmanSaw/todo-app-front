const Pool = require("pg").Pool;

const pool = new Pool({
  user: "todo",
  password: "deobald3064924",
  host: "todo-db",
  port: "5432",
  database: "todo_db",
});

module.exports = pool;
