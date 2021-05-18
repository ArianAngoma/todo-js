import './styles.css';
import {Todo, TodoList} from './classes/index'
import {createTodoHtml} from "./js/components";

export const todoList = new TodoList();

// todoList.todos.forEach(createTodoHtml);
todoList.todos.forEach(todo => createTodoHtml(todo));