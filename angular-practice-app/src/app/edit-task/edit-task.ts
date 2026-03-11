import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask {
    task = {
      id : 1,
      title : "Learn Angular",
      completed: false
    };

    onSubmit():void{
      console.log('Task updated:',this.task);
    }
}
