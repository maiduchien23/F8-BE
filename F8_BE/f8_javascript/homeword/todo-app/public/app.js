const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/add", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const newTask = JSON.parse(xhr.responseText);
      displayTask(newTask);
      taskInput.value = "";
    }
  };
  xhr.send(`task=${taskText}`);
}

function deleteTask(taskId, listItem) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/delete", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      taskList.removeChild(listItem);
    }
  };
  xhr.send(`id=${taskId}`);
}

function displayTask(task) {
  const li = document.createElement("li");
  li.textContent = task.text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTask(task.id, li);
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  li.addEventListener("dblclick", function () {
    const newText = prompt("Edit task:", task.text);
    if (newText !== null) {
      task.text = newText;
      editTask(task);
      li.textContent = task.text;
    }
  });
}

function editTask(task) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/edit", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`id=${task.id}&text=${task.text}`);
}

document.addEventListener("DOMContentLoaded", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/tasks", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const savedTasks = JSON.parse(xhr.responseText);
      savedTasks.forEach((task) => displayTask(task));
    }
  };
  xhr.send();
});
