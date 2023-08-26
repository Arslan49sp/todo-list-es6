import "./styles.css";
import todoListGenerator from "./modules/todoListGenerator.js";
import addNewTask from "./modules/addNewTask.js";
import localDataU from "./modules/localData.js";
import clearCompletedTasks from "./modules/clearCompletedTasks.js";

let todoList = [];

// checked local storage
const localData = JSON.parse(localStorage.getItem("todolist"));

if (localData) {
  todoList = localData;
}

//  render to html
todoListGenerator(todoList);

// Clear all the complete teaks
clearCompletedTasks(todoList);

const taskInput = document.querySelector("#task-input");
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // function add the input to the array
    const localData = JSON.parse(localStorage.getItem("todolist"));
    if (localData) {
      todoList = localData;
    }
    addNewTask(taskInput.value, todoList);
    taskInput.value = "";
    localDataU(todoList);
    todoListGenerator(todoList);
  }
});
