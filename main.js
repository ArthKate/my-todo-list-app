const heading = document.querySelector('h1');
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const ul = document.querySelector('#todo-list');
const button = document.querySelector('button');
let task = null;

function createTaskItem() {
  const li = document.createElement('li');
  const editBtn = document
    .createElement('i')
    .classList.add('fa-regular', 'fa-pen-to-square');
  const delBtn = document
    .createElement('i')
    .classList.add('fa-regular', 'fa-trash-can');
    li.append(editBtn);
    li.append(delBtn);
    li.innerText = input.value;
    return li;
}

// console.log(createTaskItem('arthur'))

const todos = [];


const handleAddTaskButtonClick = () => {
  const todo = createTaskItem();
  todos.push(todo);
  ul.appendChild(todo);
  input.value = '';
};

button.addEventListener('click', handleAddTaskButtonClick);


