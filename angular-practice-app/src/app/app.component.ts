import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';  
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { AddTask } from './add-task/add-task';
import { EditTask } from './edit-task/edit-task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,FooterComponent,TaskCardComponent,AddTask,EditTask],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  // protected readonly title = signal('angular-practice-app');

  // tasks = ['Learn Angular','Build Project','Prepare Interview'];
  
  // showTasks = true;

  // toggleTasks(){
  //   this.showTasks = !this.showTasks;
  // }
  
  // onTaskClicked(task : string){
  //   console.log(task);
  // }
  
  tasks: string[] = [];
  showTasks = true;

  constructor(private taskService : TaskService)
  {
    this.tasks = this.taskService.getTasks();
  }
    toogleTasks()
    {
       this.showTasks = !this.showTasks;

    }

    onTaskClicked(task:string)
    {
      console.log(task);


      
    }

    onDeleteTask(taskName: string) {
      this.tasks = this.tasks.filter(task => task !== taskName);
    }
}



















