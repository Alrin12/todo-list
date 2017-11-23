import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  template: `
    <mat-grid-list cols="12" rowHeight="40px">
      <mat-grid-tile colspan="3">
        <mat-checkbox (change)="markAllCompleted.emit($event.checked)">Mark all as complete</mat-checkbox>
      </mat-grid-tile>
    <mat-grid-tile colspan="4"></mat-grid-tile>
    <mat-grid-tile colspan="3">
      <button mat-raised-button class="button"
        (click)="clearCompletedTodos.emit(todos)">
        Clear completed ( {{completedTodo}} )</button>
    </mat-grid-tile>
    <mat-grid-tile colspan="2">
      <button mat-button disabled>items left ( {{leftTodo}} )</button>
    </mat-grid-tile>
  `,
  styles: [`
    .button {
      left: 30px;
    }
  `]
})
export class TodoFooterComponent {
  @Input() todos;
  @Input() completedTodo;
  @Input() leftTodo;
  @Output() markAllCompleted = new EventEmitter;
  @Output() clearCompletedTodos = new EventEmitter;
}
