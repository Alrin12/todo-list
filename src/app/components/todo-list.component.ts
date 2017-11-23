import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
     <mat-list>

     <mat-list-item *ngFor="let todo of (todos | todoFilter: statusNav)"
        (dblclick)="letKnowIdOfTodo(todo)">
        <mat-checkbox class="checkbox-display" [id]="todo.id"
        (change)="toggleCompleted.emit(todo.id)" [checked]="todo.completed">
        {{todo.content}}
        </mat-checkbox>

        <!--

        <div *ngif="">
        <mat-form-field class="input-lg">
        <input matInput placeholder="What needs to be done?"
        [(ngModel)]="content"
        (keyup.enter)="onEnter()" required>
        <mat-error align="end" *ngIf="!content">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
        </div>

        -->

        <button class="del-button" mat-raised-button (click)="removeTodo.emit(todo.id)">Delete</button>

        </mat-list-item>
     </mat-list>
  `,
  styles: [`
    .checkbox-display {
      width: 90%;
    }
  `]
})
export class TodoListComponent {
  content: string;
  clickStatus = false;
  todoId: number;
  @Input() todos;
  @Input() statusNav;
  @Output() removeTodo = new EventEmitter;
  @Output() toggleCompleted = new EventEmitter;


  onEnter() {
    if (this.content) {
      this.content = '';
    }
  }

  getErrorMessage() {
    return '최소 한 글자 이상 입력해주세요!';
  }

  changeTodo() {
      this.clickStatus = !this.clickStatus;
  }

  letKnowIdOfTodo(getTodo) {
     return getTodo.id;
  }
}
