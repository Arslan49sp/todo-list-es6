export default function deleteTask(id, array) {
  return array.filter((item) => item.index !== id);
}
