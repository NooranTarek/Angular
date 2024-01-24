
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-progress.component.html',
  styleUrl: './skills-progress.component.css'
})
export class SkillsProgressComponent {
  skills = [
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 70 },
    { name: 'JavaScript', progress: 60 },
    { name: 'Angular', progress: 20 },
    { name: 'C', progress: 97 },
    { name: 'C++', progress: 97 },
    { name: 'DataStructure', progress: 80 }
  ];
}
