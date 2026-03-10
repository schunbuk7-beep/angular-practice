import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
 taskTitle : string = '';
 showAlert : boolean = false;

 onSubmit() : void {
  if(this.taskTitle.trim()){
    console.log('task added:',this.taskTitle);
    this.taskTitle = '';
    this.showAlert = true;

    setTimeout(() =>{
      this.showAlert = false;
    },3000)
  }

 }
}
