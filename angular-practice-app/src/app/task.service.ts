import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService{
  tasks=['Learn Angular','Built Project','Prepare Interview'];

  getTasks(){
    return this.tasks;
  }
}
  
