import { Todo } from "./Todo.class";

export class TodoList {
  constructor() {
    this.cargarLocalstorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
    //El método filter de los arrays lo que hace es recorrer todo el array y
    //devolverte un array nuevo con los elementos que coincidan en el filtrado.
    //En el caso de la línea 17 busca los Ids de cada valor del array y mientras
    //no sean igual al id mandado como parámetro a la función lo agrega, en caso de
    //que la id sea la misma lo deja fuera.
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalstorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    this.todos = this.todos.map(Todo.fromJson);
  }
}
