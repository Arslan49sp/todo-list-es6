import localDataU from './localData.js';
import updateCompleted from './updateCompleted.js';
import sortListAfter from './sortListAfter.js';
import updateTaskDesc from './updateTaskDesc.js';
import deleteTask from './deleteTask.js';

export default function todoListGenerator(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="box task-item" >
    <span class="list ${
  item.completed === false ? '' : 'checked'
}"><input class="checkbox" type="checkbox" data-id="${item.index}" ${
  item.completed === false ? '' : 'checked'
} />
      <textarea class="input" data-id="${item.index}">${
  item.description
}</textarea>
    </span>
    <span id="${
  item.index
}-menu-icon"><i class="icon fa-solid fa-ellipsis-vertical"></i></span>
    <span id="${
  item.index
}-delete-icon" class="hidden remove-button" data-id="${
  item.index
}" ><i class="icon fas fa-trash"></i></span>
</li>`;
  }

  const listContainer = document.querySelector('.list-container');

  listContainer.innerHTML = arrayTodoList
    .map((list) => loopTodoElement(list))
    .join('');

  const textareaInputs = document.querySelectorAll('.input');

  textareaInputs.forEach((input) => {
    if (input.scrollHeight > 50) {
      const height = input.scrollHeight;
      input.style.height = `${height - 10}px`;
    }

    input.addEventListener('keyup', (e) => {
      e.target.style.height = 'auto';
      const height = e.target.scrollHeight;
      e.target.style.height = `${height - 20}px`;
      if (e.key === 'Enter') {
        input.value = input.value.replace(/\n/g, '');
        const index = Number(input.getAttribute('data-id')) - 1;
        updateTaskDesc(input.value, arrayTodoList, index);
        localDataU(arrayTodoList);
        todoListGenerator(arrayTodoList);
      }
    });

    const inputId = input.getAttribute('data-id');
    const menuIcon = document.getElementById(`${inputId}-menu-icon`);
    const deleteIcon = document.getElementById(`${inputId}-delete-icon`);

    input.addEventListener('focusin', () => {
      menuIcon.classList.add('hidden');
      deleteIcon.classList.remove('hidden');
    });

    input.addEventListener('focusout', () => {
      menuIcon.classList.remove('hidden');
      deleteIcon.classList.add('hidden');
    });
  });

  const removeButtons = document.querySelectorAll('.remove-button');

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-id'));
      arrayTodoList = deleteTask(id, arrayTodoList);
      sortListAfter(arrayTodoList, arrayTodoList.length);
      localDataU(arrayTodoList);
      todoListGenerator(arrayTodoList);
    });
  });

  // update array if checkbox checked
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
      const id = Number(box.getAttribute('data-id'));
      updateCompleted(id, arrayTodoList);
      localDataU(arrayTodoList);
      todoListGenerator(arrayTodoList);
    });
  });
}
