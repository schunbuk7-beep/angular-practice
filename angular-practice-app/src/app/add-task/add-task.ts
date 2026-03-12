import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgValidationError, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
 showAlert : boolean = false;

 taskForm = new FormGroup ({
   taskTitle: new FormControl('', Validators.required)
 });

 onSubmit() : void {
  if(this.taskForm.valid){
    console.log('task added:',this.taskForm.value);
    this.taskForm.reset();
    this.showAlert = true;

    setTimeout(() =>{
      this.showAlert = false;
    },3000)
  }

 }
}
