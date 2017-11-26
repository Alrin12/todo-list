import { Component, OnInit } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-container',
  template: `
     <div class="container">
                <h1 class="title">Todos</h1>

                <app-todo-form (addTodo)="addTodo($event)"></app-todo-form>

                <app-todo-nav
                [navItems]="navItems"
                [statusNav]="selectedNavItem"
                (toggleTap)="toggleTap($event)"
                ></app-todo-nav>

                <app-todo-list
                [todos]="todos"
                [statusNav]="selectedNavItem"
                (removeTodo)="removeTodo($event)"
                (modifyTodo)="modifyTodo($event)"
                (modifyTodoId)="getModifyTodoId($event)"
                (toggleCompleted)="toggleCompleted($event)"></app-todo-list>

                <app-todo-footer
                [todos]="todos"
                [completedTodo]="completedTodo()"
                [leftTodo]="leftTodo()"
                (markAllCompleted)="markAllCompleted($event)"
                (clearCompletedTodos)="clearCompletedTodos($event)"></app-todo-footer>
    </div>
  `,
  styles: [`
  .title {
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    color: #673ab7;
    margin-bottom: 30px;
  }
  `]
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  content: string;
  selectedNavItem: string;
  modifyTodoId: number;
  completedTodos: number;
  leftTodos: number;
  navItems: object;

  // Category: Init

  ngOnInit() {
    this.todos = this.getTodos();
    this.navItems = ['All', 'Active', 'Completed'];
    this.selectedNavItem = 'All';
  }

  getTodos() {
    return [
      { id: 3, content: '자러가기', completed: false },
      { id: 2, content: '양치하기', completed: true },
      { id: 1, content: '저녁먹기', completed: true }
    ];
  }

  // Category: Tab

  toggleTap(event) {
    this.selectedNavItem = event;
  }

  // Category: Todo Handler

  getTodoId() {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }

  addTodo(event) {
    this.todos = [{ id: this.getTodoId(), content: event, completed: false }, ...this.todos];
  }

  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== todoId;
    });
  }

  getModifyTodoId(modifyTodoId) {
    this.modifyTodoId = modifyTodoId;
  }

  modifyTodo(modifyContent) {
    this.todos = this.todos.map(todo => todo.id === this.modifyTodoId ? Object.assign(todo, { content: modifyContent }) : todo);
  }


  // Category: Completed

  markAllCompleted(event) {
    if (event) {
      this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: true }));
    } else {
      this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: false }));
    }
  }

  toggleCompleted(todoId: number) {
    this.todos = this.todos.map(todo => {
      return todo.id === todoId ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
  }

  clearCompletedTodos(event) {
    this.todos = event.filter(({ completed }) => !completed);
  }


  completedTodo() {
    return this.todos.filter(({ completed }) => completed).length;
  }

  leftTodo() {
    return this.todos.filter(({ completed }) => !completed).length;
  }

}
