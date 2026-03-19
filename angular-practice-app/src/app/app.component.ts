import { Component,ChangeDetectorRef} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from './task.service';  
import { AddTask } from './add-task/add-task';
import { EditTask } from './edit-task/edit-task';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, FooterComponent, TaskCardComponent, AddTask, EditTask, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

  showNotification: boolean = false;
  notificationMessage: string = '';

  showTasks = true;
  searchKeyword: string = '';

  constructor(private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}
 
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


  //  showMessage(message: string): void {
  //   this.notificationMessage = message;
  //   this.showNotification = true;
  //   setTimeout(() => {
  //     this.showNotification = false;
  //   }, 5000);
  // }

  showMessage(message: string): void {
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
      this.cdr.detectChanges();        // 👈 only here, after setTimeout
    }, 3000);
  }
}