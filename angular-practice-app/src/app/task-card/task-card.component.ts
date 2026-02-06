import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
   standalone: true,
   imports: [CommonModule],  
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() taskName! : string;
  @Input() isHighlight = false;
  @Output() taskClicked = new EventEmitter<string>();

  onclick()
  {
    this.taskClicked.emit(this.taskName);
  }
}
