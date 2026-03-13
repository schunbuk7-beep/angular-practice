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
  @Output() deleteClicked = new EventEmitter<string>();

  onclick()
  {
    this.taskClicked.emit(this.taskName);
  }

  onDelete()
  {
    const confirmed = confirm("Are you really you want to delete this Task");

    if(confirmed)
    {
      this.deleteClicked.emit(this.taskName);
    }
  }
}
