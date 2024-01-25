import { Component } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component.js';
import { ToDoListComponent } from '../to-do-list/to-do-list.component.js';

@Component({
  selector: 'app-to-do-wrapper',
  standalone: true,
  imports: [ToDoFormComponent,ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  tasks: { text: string; completed: boolean }[] = [];

  addTask(task: string): void {
    this.tasks.push({ text: task, completed: false });
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    
  }

  completeTask(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
