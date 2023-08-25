export default function localDataU(data) {
  localStorage.setItem("todolist", JSON.stringify(data));
}
