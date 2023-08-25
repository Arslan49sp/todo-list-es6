import './styles.css';

const todoList = [
  {
    description: 'First item',
    completed: false,
    index: 1,
  },
  {
    description: 'Third item',
    completed: true,
    index: 3,
  },
  {
    description: 'Second Item.',
    completed: false,
    index: 2,
  },

  {
    description: 'Fourth Item.',
    completed: true,
    index: 4,
  },
];

//  this code will sort the items according to their index property in accending order.
todoList.sort((item1, item2) => item1.index - item2.index);

function listItemGenerator(item) {
  if (item.completed) {
    // if the todo item is completed then mark the checkbox.
    return `<li class="box">
    <span class="list completed-item"><input class="checkbox" type="checkbox" checked />${item.description}</span>
    <span><i class=" icon fa-solid fa-ellipsis-vertical"></i></span>
</li>`;
  }
  // if the item is not completed then unchecked the checkbox.
  return `<li class="box">
    <span class="list "><input class="checkbox" type="checkbox" />${item.description}</span>
    <span><i class=" icon fa-solid fa-ellipsis-vertical"></i></span>
</li>`;
}

const itemsContainer = document.querySelector('.list-container');

itemsContainer.innerHTML = todoList
  .map((list) => listItemGenerator(list))
  .join('');
