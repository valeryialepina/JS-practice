import { addTodoTextField, bigWrapper } from './components.js'

export function getTodo(text) {
    const todoElement = document.createElement('div')
    todoElement.classList.add('todo-item')
    todoElement.setAttribute('id', `todo-${Math.floor(Math.random() * 1000) + 1}`)

    const completeButton = document.createElement('button')
    completeButton.classList.add('btn-todo-action', 'complete')
    completeButton.innerText = ''
    completeButton.addEventListener('click', function () {
        completeButton.innerText = completeButton.innerText === '' ? '✓' : ''
        todoElement.classList.toggle('complete')
        todoTextElement.classList.toggle('active')
    })
    const todoTextElement = document.createElement('div')
    todoTextElement.classList.add('todo-text')
    // todoTextElement.innerHTML = `<span>${text}<span>`
    todoTextElement.innerHTML = text

    const columnWrapper = document.createElement('div')
    columnWrapper.classList.add('column-wrapper')
    const todoDeleteButton = document.createElement('button')
    todoDeleteButton.classList.add('btn-todo-action', 'delete')
    todoDeleteButton.innerText = 'X'
    todoDeleteButton.addEventListener('click', () => todoElement.remove())
    const todoDatetimeBox = document.createElement('span')
    todoDatetimeBox.classList.add('column-wrapper-date')
    todoDatetimeBox.innerText = (new Date()).toLocaleString()
    columnWrapper.append(todoDeleteButton, todoDatetimeBox)

    todoElement.append(completeButton, todoTextElement, columnWrapper)

    return todoElement;
}

export const createTodo = () => {
    const text = addTodoTextField.value;
    bigWrapper.append(getTodo(text))
    addTodoTextField.value = ''
}

export const deleteAll = () => {
    const todoItems = document.querySelectorAll('.todo-item');
    if (todoItems.length === 0) {
        return;
    }
    todoItems.forEach((item) => item.remove());
}

