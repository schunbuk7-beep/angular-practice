import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() taskname! : string;
  @Output() taskclicked = new EventEmitter<string>();

  onclick()
  {
    this.taskclicked.emit(this.taskname);
  }
}
