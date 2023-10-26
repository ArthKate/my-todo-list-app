const button = document.querySelector(".btn");
const ul = document.querySelector(".todoList");

const createNewTodo = (task) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("i")
  delBtn.classList.add('fa-regular', 'fa-trash-can');
  // delBtn.innerText = 'Delete';
  li.appendChild(document.createTextNode(task));
  li.appendChild(delBtn);
  return li;
}

const todos = [];

const addTodo = () => {
  const input = document.querySelector(".todo-input");
  const todo = input.value;
  todos.push(todo);
  const newTodo = createNewTodo(todo);
  ul.appendChild(newTodo);
  input.value = '';
}

button.addEventListener('click', addTodo);
