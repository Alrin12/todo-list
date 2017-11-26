import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
     <mat-list>

     <mat-list-item *ngFor="let todo of (todos | todoFilter: statusNav)"
        (dblclick)="letKnowIdOfTodo(todo.id)" class="todoList">
        <mat-checkbox class="checkbox-display" [id]="todo.id"
        (change)="toggleCompleted.emit(todo.id)" [checked]="todo.completed">
        </mat-checkbox>
        <span class="todoContent" *ngIf="todoId !== todo.id else elseBlock">{{todo.content}}</span>

        <ng-template #elseBlock>
        <mat-form-field class="input-lg">
        <input matInput placeholder="How may I fix it?"
        [(ngModel)]="content"
        (keyup.enter)="onEnter()" required>
        <mat-error align="end" *ngIf="!content">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
        </ng-template>

        <button class="del-button" mat-raised-button (click)="removeTodo.emit(todo.id)">Delete</button>

        </mat-list-item>
     </mat-list>
  `,
  styles: [`
    .checkbox-display {
      width: 5%;
    }
    .del-button {
      position: absolute;
      margin-left: 85%;
    }
    .todoList {
      min-height: 60px;
    }
    .input-lg {
      display: inline-block;
      min-width: 300px;
      position: absolute;
      margin-left: 28px;
      bottom: 20px;
    }
  `]
})
export class TodoListComponent {
  content: string;
  // clickStatus = false;
  todoId: number;
  @Input() todos;
  @Input() statusNav;
  @Output() removeTodo = new EventEmitter;
  @Output() toggleCompleted = new EventEmitter;
  @Output() modifyTodo = new EventEmitter;
  @Output() modifyTodoId = new EventEmitter;

  onEnter() {
    if (this.content) {
      this.modifyTodoId.emit(this.todoId);
      this.modifyTodo.emit(this.content);
      this.content = '';
      this.todoId = 0;
    }
  }

  getErrorMessage() {
    return '최소 한 글자 이상 입력해주세요!';
  }

  // changeTodo() {
  //     this.clickStatus = !this.clickStatus;
  // }

  letKnowIdOfTodo(getTodoId) {
    this.todoId = getTodoId;
  }
}
