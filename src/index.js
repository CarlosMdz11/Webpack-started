import "./styles.css";
import { Todo, TodoList } from "./classes/index";
import { crearTodoHTML } from "./js/componentes";

export const todoList = new TodoList();
const tarea = new Todo("Curso de JS");

todoList.nuevoTodo(tarea);
console.log(todoList);

crearTodoHTML(tarea);
