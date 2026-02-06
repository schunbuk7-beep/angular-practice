import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,FooterComponent,TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('angular-practice-app');

  tasks = ['Learn Angular','Build Project','Prepare Interview'];
  
  showTasks = true;

  toggleTasks(){
    this.showTasks = !this.showTasks;
  }
  
  onTaskClicked(task : string){
    console.log(task);
  }
  
}



















