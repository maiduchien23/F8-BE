const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

let tasks = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/add", (req, res) => {
  const taskText = req.body.task;
  const newTask = addTask(taskText);
  res.cookie("tasks", JSON.stringify(tasks));
  res.json(newTask);
});
app.post("/delete", (req, res) => {
  const taskId = req.body.id;
  deleteTask(taskId);
  res.cookie("tasks", JSON.stringify(tasks));
  res.send("Task deleted successfully.");
});

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
}

app.post("/edit", (req, res) => {
  const taskId = req.body.id;
  const newText = req.body.text;
  editTask(taskId, newText);
  res.cookie("tasks", JSON.stringify(tasks));
  res.send("Task edited successfully.");
});

function addTask(taskText) {
  const newTask = {
    id: generateTaskId(),
    text: taskText,
  };

  tasks.push(newTask);
  return newTask;
}

function generateTaskId() {
  if (tasks.length === 0) {
    return "22-Empty";
  } else {
    const lastTaskId = tasks[tasks.length - 1].id;
    if (lastTaskId.endsWith("-Empty")) {
      const lastEmptyId = parseInt(lastTaskId.split("-")[0]);
      return (lastEmptyId + 1).toString().padStart(5, "0") + "-Empty";
    } else {
      const lastId = parseInt(lastTaskId);
      return (lastId + 1).toString().padStart(5, "0");
    }
  }
}

function editTask(taskId, newText) {
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.text = newText;
  }
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
