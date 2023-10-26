const heading = document.querySelector('h1');
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
const button = document.querySelector('button');

function createTaskItem(text) {
  const li = document.createElement('li');
  // const editBtn = document.createElement('i');
  // editBtn.classList.add('fa-regular', 'fa-pen-to-square');
  const delBtn = document.createElement('i');
  delBtn.classList.add('fa-regular', 'fa-trash-can');

  // editBtn.addEventListener('click', handleEditTaskClick);
  delBtn.addEventListener('click', handleDeleteTaskClick);

  // li.appendChild(editBtn);
  li.appendChild(delBtn);
  li.appendChild(document.createTextNode(text));
  return li;
}

const todos = [];
// check if toddos exists in local storage
if(localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItesm('todos'))
}

// function handleEditTaskClick() {
//   console.log('Edit task clicked');
// }

function handleDeleteTaskClick() {
  console.log('Delete task clicked');
}

function handleAddTaskButtonClick(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const taskText = input.value.trim();
  if (taskText !== '') {
    const todo = createTaskItem(taskText);
    todos.push(todo);
    ul.appendChild(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
  }
}

button.addEventListener('click', handleAddTaskButtonClick);
