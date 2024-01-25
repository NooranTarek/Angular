import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component.js';
import { ToDoListComponent } from './to-do-list/to-do-list.component.js';
import { ToDoWrapperComponent } from './to-do-wrapper/to-do-wrapper.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToDoFormComponent,ToDoListComponent,ToDoWrapperComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}
