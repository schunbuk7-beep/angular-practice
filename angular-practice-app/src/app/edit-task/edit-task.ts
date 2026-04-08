import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Button } from '../shared/button/button';
@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule,CommonModule,Button],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask implements OnInit {
    showNotification:  boolean = false;
      editForm = new FormGroup({
        title: new FormControl('',Validators.required)
      });

      taskId! : number;

      constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService,
        private cdr: ChangeDetectorRef
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
      const existingTask = this.taskService.getTaskById(this.taskId);
      const updatedTask: Task = {
        id: this.taskId,
        title: this.editForm.value.title!,
        completed: existingTask?.completed || false
      };
      this.taskService.updateTask(updatedTask);   
      
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
        this.cdr.detectChanges();
        this.router.navigate(['/']);
      }, 50000);
    }
  }

  onCancel(): void {
  this.router.navigate(['/']);
}
}