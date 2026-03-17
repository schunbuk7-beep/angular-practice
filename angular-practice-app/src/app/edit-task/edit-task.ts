import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService,Task } from '../task.service';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask implements OnInit {
      editForm = new FormGroup({
        title: new FormControl('',Validators.required)
      });

      taskId! : number;

      constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService
      ) {}

      ngOnInit(): void {
        this.taskId = Number(this.route.snapshot.paramMap.get('id'));
        const task = this.taskService.getTaskById(this.taskId);
        if(task)
        {
          this.editForm.patchValue({title: task.title});
        }
      }

    onSubmit(): void {
    if (this.editForm.valid) {
      const updatedTask: Task = {
        id: this.taskId,
        title: this.editForm.value.title!
      };
      this.taskService.updateTask(updatedTask);   
      this.router.navigate(['/']);                
    }
  }

  onCancel(): void {
  this.router.navigate(['/']);
}
}