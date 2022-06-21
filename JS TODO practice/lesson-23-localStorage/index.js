const root = document.getElementById('root')

// ----------------- Action Panel -----------------

const bigWrapper = document.createElement('div')
bigWrapper.classList.add('container')

const wrapperRow = document.createElement('div')
wrapperRow.classList.add('container-wrapper')

const deleteAllButton = document.createElement('button')
deleteAllButton.textContent = 'Delete All'
deleteAllButton.classList.add('btn')

const addTodoTextField = document.createElement('input')
addTodoTextField.placeholder = 'Enter todo...'
addTodoTextField.setAttribute('id', 'todo-input')

const addTodoButton = document.createElement('button')
addTodoButton.textContent = 'Add'
addTodoButton.classList.add('btn')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)

// ----------------- Todos -----------------

function getTodo(todoObject, index, todos) {
  let todoElement = document.createElement('div')
  todoElement.classList.add('todo-item', (todoObject.isChecked ? 'complete' : undefined))
  todoElement.setAttribute('id', `todo-${todoObject.id}`)

  const todoTextElement = document.createElement('div')
  todoTextElement.classList.add('todo-text')
  todoTextElement.innerHTML = `<span>${todoObject.text}<span>`

  const completeButton = document.createElement('button')
  completeButton.classList.add('btn-todo-action', 'complete')
  completeButton.innerText = todoObject.isChecked ? '✓' : ''
  completeButton.addEventListener('click', () => {
    todoObject.isChecked = !todoObject.isChecked;
    completeButton.innerText = todoObject.isChecked ? '✓' : ''
    todoElement.classList.toggle('complete');
    // saveTodos(todos);
  })

  const columnWrapper = document.createElement('div')
  columnWrapper.classList.add('column-wrapper')

  const todoDeleteButton = document.createElement('button')
  todoDeleteButton.classList.add('btn-todo-action', 'delete')
  todoDeleteButton.innerText = 'X'
  todoDeleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    todoElement.remove();
    // saveTodos(todos)
  })

  const todoDatetimeBox = document.createElement('span')
  todoDatetimeBox.classList.add('column-wrapper-date')
  todoDatetimeBox.innerText = todoObject.date

  columnWrapper.append(todoDeleteButton, todoDatetimeBox)

  todoElement.append(completeButton, todoTextElement, columnWrapper)

  return todoElement;
}

// ----------------- Render section -----------------


let todosFromStorage = localStorage.getItem('todos');
const todosDB = todosFromStorage ? JSON.parse(todosFromStorage) : [];

window.onclick = (event) => {
  console.log('click')
  saveTodos(todosDB);
}

console.log('todosDB', todosDB);
const transformedTodos = todosDB.map(getTodo)
console.log('transformedTodos', transformedTodos);

bigWrapper.append(wrapperRow, ...transformedTodos)
root.append(bigWrapper)

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const createTodo = (todos) => {
  const text = addTodoTextField.value;
  const todoObject = {
    id: Math.floor(Math.random() * 1000) + 1,
    text: text,
    date: (new Date()).toLocaleString(),
    isChecked: false,
  }
  let length = todos.push(todoObject);
  const todo = getTodo(todoObject, length - 1, todos);
  bigWrapper.append(todo)
  addTodoTextField.value = '';
  // saveTodos(todos);
}

addTodoButton.addEventListener('click', () => createTodo(todosDB))

const deleteAll = () => {
  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((item) => item.remove());
  todosDB.splice(0, todosDB.length);
  // saveTodos(todosDB)
}

deleteAllButton.addEventListener('click', deleteAll)
