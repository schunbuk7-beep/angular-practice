import { Component , ChangeDetectorRef} from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule,CommonModule,Button],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
 showAlert : boolean = false;

 taskForm = new FormGroup ({
   taskTitle: new FormControl('', Validators.required)
 });

 constructor(private taskService : TaskService,
  private dtr: ChangeDetectorRef
 ) {}

 onSubmit() : void {
  if(this.taskForm.valid){
    const title = this.taskForm.value.taskTitle || '';
    this.taskService.addTask(title);
    this.taskForm.reset();
    this.showAlert = true;

    setTimeout(() =>{
      this.showAlert = false;
      this.dtr.detectChanges();
    },3000)
  }

 }
}
