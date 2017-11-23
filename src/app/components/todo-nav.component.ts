import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-nav',
  template: `
    <mat-tab-group (click)="toggle($event)">
        <mat-tab *ngFor="let navItem of navItems"
          [class.active]="navItem===statusNav"
          [label]="navItem">
          <span>{{navItem}}</span>
          </mat-tab>
    </mat-tab-group>
  `
})
export class TodoNavComponent {
  @Input() navItems;
  @Input() statusNav;
  @Output() toggleTap = new EventEmitter;

  toggle(status) {
    this.toggleTap.emit(status.target.textContent);
  }
}
