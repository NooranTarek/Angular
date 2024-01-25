import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-list-card',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './users-list-card.component.html',
  styleUrl: './users-list-card.component.css'
})
export class UsersListCardComponent {
  @Input() userItem: any;

}
