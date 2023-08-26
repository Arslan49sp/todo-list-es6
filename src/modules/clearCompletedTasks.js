import sortListAfter from "./sortListAfter.js";
import localDataU from "./localData.js";
import todoListGenerator from "./todoListGenerator.js";

export default function clearCompletedTasks(todoList) {
  const clearAllCompleted = document.querySelector("#clear-completed");

  clearAllCompleted.addEventListener("click", () => {
    todoList = JSON.parse(localStorage.getItem("todolist")) || [];
    todoList = todoList.filter((list) => list.completed !== true);
    sortListAfter(todoList, todoList.length);
    localDataU(todoList);
    todoListGenerator(todoList);
  });
}
