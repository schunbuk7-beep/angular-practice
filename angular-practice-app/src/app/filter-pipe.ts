import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], keyword: string): Task[] {
    if(!keyword)
    {
      return tasks;
    }

    return tasks.filter(task => 
      task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
  }

}
