import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  template: `
  <mat-form-field class="input-lg">
    <input matInput placeholder="What needs to be done?"
      [(ngModel)]="content"
      (keyup.enter)="onEnter()" required>
      <mat-error align="end" *ngIf="!content">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
  `,
  styles: [`
    .input-lg {
      display: block;
    }
  `]
})
export class TodoFormComponent {
  content: string;

  @Output() addTodo = new EventEmitter();

  onEnter() {
    if (this.content) {
      this.addTodo.emit(this.content);
      this.content = '';
    }
  }

  getErrorMessage() {
    return '최소 한 글자 이상 입력하세요!';
  }
}
