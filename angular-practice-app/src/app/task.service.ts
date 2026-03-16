import { Injectable } from '@angular/core';

export interface Task{
  id : number;
  title : string;
}

@Injectable({
  providedIn: 'root',
})

export class TaskService{
  tasks: Task[]=[
    {id: 1, title : 'Learn Angular'},
    {id: 2, title : 'Built Project'},
    {id: 3, title : 'Prepare Interview'}
  ];

  getTasks(){
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined{
    return this.tasks.find(task => task.id === id);
    
  }

  updateTask(updatedTask: Task): void{
    const index =this.tasks.findIndex(task => task.id === updatedTask.id)

    if(index !== -1)
    {
      this.tasks[index] = updatedTask;
    }
  }
}
  
