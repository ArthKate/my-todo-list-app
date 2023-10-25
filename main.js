const section = document.querySelector('section'); //Grab section element from html file.
section.className = 'container'; // add class attribute to section element
const h1 = document.querySelector('h1'); //create h1 element for todo-list heading
const input = document.querySelector('#todo-list-input'); //grabbing input element our html file
const span = document.createElement('span'); // create span element
const button = document.createElement('button'); //
button.setAttribute('class', 'btn'); // creating class attribute and class name btn.
button.innerHTML = 'Add Task'; //adding button tag and the text it display
span.appendChild(button); // add button node/element to the span element.
const ul = document.querySelector('ul'); //grabbing our ul element from html file
// const li = document.createElement('li');
// ul.appendChild(li);

const addNewTodoItem = (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  li.setAttribute('id', 'todo-item');
  li.innerText = input.value;
  return ul.appendChild(li)
};

button.addEventListener('click', addNewTodoItem);




section.append(h1, input, span, ul); //Adding my elements into the section/container element.