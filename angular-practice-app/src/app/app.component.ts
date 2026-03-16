import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from './task.service';  // 👈 import Task
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

  tasks: Task[] = [];        
  showTasks = true;
  searchKeyword: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  toogleTasks() {
    this.showTasks = !this.showTasks;
  }

  onTaskClicked(task: string) {
    console.log(task);
  }

  onDeleteTask(taskName: string) {
    this.tasks = this.tasks.filter(task => task.title !== taskName);  // 👈 task.title
  }
}