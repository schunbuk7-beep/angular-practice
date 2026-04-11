import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})

export class TaskService{
  tasks: Task[]=[
    {id: 1, title : 'Learn Angular', completed : false},
    {id: 2, title : 'Built Project', completed : false},
    {id: 3, title : 'Prepare Interview', completed : false}
  ];

  getTasks(){
    if(Math.random() > 0.5)
    {
      throw new Error("Failed to Load Task");
    }
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

  addTask(title : string): void {
    const newTask: Task = {

      id: this.tasks.length+1,
      title: title,
      completed: false

    };
    this.tasks.push(newTask);
  }

  deleteTask(id : number): void{
     this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleComplete(id : number):void{
    const task = this.tasks.find(task => task.id === id);
    
    if(task)
    {
      task.completed = !task.completed; 
    }
  }
}
  
