import { bigWrapper, wrapperRow, deleteAllButton, addTodoTextField, addTodoButton } from "./components.js"
import { getTodo, createTodo, deleteAll } from "./function.js"

const root = document.getElementById('root')

wrapperRow.append(deleteAllButton, addTodoTextField, addTodoButton)


bigWrapper.append(wrapperRow)
root.append(bigWrapper)

addTodoButton.addEventListener('click', createTodo)

deleteAllButton.addEventListener('click', deleteAll)



