import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projectsRow1=[
  {projectName:"project1" , projectDescription:"project description 1"},
  {projectName:"project2" , projectDescription:"project description 2"},
  {projectName:"project3" , projectDescription:"project description 3"},



];
projectsRow2=[
  {projectName:"project4" , projectDescription:"project description 4"},
  {projectName:"project5" , projectDescription:"project description 5"},
  {projectName:"project6" , projectDescription:"project description 6"},

];
}
