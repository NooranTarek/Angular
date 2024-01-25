import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersListInfoComponent } from './users-list-info/users-list-info.component.js';
import { UsersListSearchComponent } from './users-list-search/users-list-search.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsersListInfoComponent,UsersListSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usersList';
}
