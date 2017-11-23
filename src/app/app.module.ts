import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TodoContainerComponent } from './components/todo-container.component';
import { TodoFooterComponent } from './components/todo-footer.component';
import { TodoFormComponent } from './components/todo-form.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoNavComponent } from './components/todo-nav.component';
import { TodoFilterPipe } from './todo-filter.pipe';
import { MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule, MatGridListModule,
  MatCheckboxModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent,
    TodoFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
