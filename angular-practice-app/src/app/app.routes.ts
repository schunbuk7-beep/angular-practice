import { Routes } from '@angular/router';
import { AddTask } from './add-task/add-task';
import { EditTask } from './edit-task/edit-task';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'add-task', component: AddTask},
    { path: 'edit-task',component: EditTask},
];
