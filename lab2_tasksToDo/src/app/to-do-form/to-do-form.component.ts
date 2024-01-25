import { CommonModule } from '@angular/common';
import { Component,Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  @ViewChild('taskInput') taskInput!: ElementRef<HTMLInputElement>;
  @Output() addTask= new EventEmitter<string>();

  onAddTask(): void {
    const taskValue = this.taskInput.nativeElement.value.trim();
    if (taskValue !== '') {
      this.addTask.emit(taskValue);
      this.taskInput.nativeElement.value = ''; 
    }
  }
}
