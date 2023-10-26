const button = document.querySelector(".btn");
const ul = document.querySelector(".todoList");

const createNewTodo = (task) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = 'Delete';
  li.appendChild(delBtn);
  li.appendChild(document.createTextNode(task));
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
