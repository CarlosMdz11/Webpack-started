import "./styles.css";
import { Todo, TodoList } from "./classes/index";
import { crearTodoHTML } from "./js/componentes";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHTML);
