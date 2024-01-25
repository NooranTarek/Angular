import { NgFor } from '@angular/common';
import { Component , Input, Output, EventEmitter, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() tasks: { text: string; completed: boolean }[] = [];
  @Output() onDelete = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<number>();

  onDeleteTask(index: number): void {
    this.onDelete.emit(index);
  }

  onCompleteTask(index: number): void {
    this.onComplete.emit(index);
  }
}
