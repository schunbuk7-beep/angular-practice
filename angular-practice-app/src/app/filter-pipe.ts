import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(tasks: string[], keyword: string): string[] {
    if(!keyword)
    {
      return tasks;
    }

    return tasks.filter(task => 
      task.toLowerCase().includes(keyword.toLowerCase())
    );
    
  }

}
