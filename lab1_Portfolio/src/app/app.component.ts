import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component.js';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './about-me/about-me.component.js';
import { SkillsProgressComponent } from './skills-progress/skills-progress.component.js';
import { ProjectsComponent } from './projects/projects.component.js';
import { FooterComponent } from './footer/footer.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroSectionComponent,NgbAlertModule,AboutMeComponent,SkillsProgressComponent,ProjectsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
