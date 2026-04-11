import { Component,ChangeDetectorRef} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';
import { AddTask } from './add-task/add-task';
import { EditTask } from './edit-task/edit-task';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './services/filter-pipe';
import { Button } from './shared/button/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, FooterComponent, TaskCardComponent, AddTask, EditTask, FormsModule, FilterPipe,Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

  showNotification: boolean = false;
  notificationMessage: string = '';

  showTasks = true;
  searchKeyword: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {
    this.LoadTask();
  }

  LoadTask()
  {
    this.isLoading=true;
    this.errorMessage = '';
    setTimeout(() =>{
      try{
        this.taskService.getTasks();
        this.isLoading=false;
      }
      catch(error)
      {
              this.isLoading=false;
              this.errorMessage = '❌ Failed to load tasks. Please try again.';
      }

    this.cdr.detectChanges();
    },1500);
  }
 
  retryLoading():void{
    this.LoadTask();
  }
  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  toogleTasks() {
    this.showTasks = !this.showTasks;
  }

  onTaskClicked(task: string) {
    console.log(task);
  }

  onDeleteTask(taskName: string) {
    this.showMessage('🗑️ Task deleted successfully!');
  }

  showMessage(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges();        // 👈 only here, after setTimeout
    }, 3000);
  }

  get completedCount(): number {
      return this.tasks.filter(task => task.completed).length;
  }

  get pendingCount(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}