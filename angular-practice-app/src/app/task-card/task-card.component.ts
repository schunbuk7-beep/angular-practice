import { Component,Input,Output,EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { TaskService  } from '../task.service';

@Component({
  selector: 'app-task-card',
   standalone: true,
   imports: [CommonModule],  
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  @Input() taskName! : string;
  @Input() taskId! : number;
  @Input() isHighlight = false;
  @Input() completed = false;
  @Output() taskClicked = new EventEmitter<string>();
  @Output() deleteClicked = new EventEmitter<string>();

  constructor(private router : Router,
    private taskService : TaskService,
    private cdtr : ChangeDetectorRef
  ) {}

  onclick()
  {
    this.taskClicked.emit(this.taskName);
  }

  onDelete()
  {
    const confirmed = confirm("Are you really you want to delete this Task");

    if(confirmed)
    {
      this.taskService.deleteTask(this.taskId);
      this.deleteClicked.emit(this.taskName);
    }
  }

  onEdit()
  {
    this.router.navigate(['/edit',this.taskId]);
  }

  onToggleCompleted()
  {
    this.taskService.toggleComplete(this.taskId);
    this.completed = !this.completed;
    this.cdtr.detectChanges();
  }
}
