import { Component, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { TaskCardComponent } from './task-card/task-card.component';  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,TaskCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('angular-practice-app');
  
  OnTaskClicked(task : string){
    console.log(task);
  }
}



















