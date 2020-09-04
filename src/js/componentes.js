import { Todo } from "../classes/index";
import { todoList } from "../index";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

export const crearTodoHTML = (todo) => {
  const htmlTodo = `<li class="${
    todo.completado ? "completed" : ""
  }" data-id="${todo.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.completado ? "cheked" : ""}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`;
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

//Events
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList);
    crearTodoHTML(nuevoTodo);
    txtInput.value = "";
  }
});
