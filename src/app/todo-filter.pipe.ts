import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: any, status?: any): any {
    if (status === 'Active') {
      return todos.filter(({ completed }) => !completed);
    }
    if (status === 'Completed') {
      return todos.filter(({ completed }) => completed);
    }
    return todos;
  }
}
