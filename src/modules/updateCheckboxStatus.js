export default function updateCheckboxStatus(inputId, array) {
  array.map((item) => {
    if (item.index === inputId) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
    return item;
  });
}
