import {Todo} from "./index";
import {countTodo} from "../js/components.js";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.loadLocalStorage();
        this.countTodo();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
        this.countTodo();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
        this.countTodo();
    }

    markedTodo(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                this.countTodo();
                break;
            }
        }
    }

    deleteAllMarked() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        // this.todos = this.todos.map(obj => Todo.fromJson(obj))
        this.todos = this.todos.map(Todo.fromJson)
    }

    countTodo() {
        let pending = 0;
        for (let todo of this.todos) {
            (!todo.completed) ? pending++ : null;
        }
        countTodo.firstElementChild.innerHTML = pending;
    }
}