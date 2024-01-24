import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'], // Use styleUrls instead of styleUrl
})
export class HeroSectionComponent {
  userName: string = 'Nouran Tarek Mohammde';
  jobTitle: string = 'Software Engineer';
  imgUrl: string = 'assets/images/nouran.PNG';
  showAlert() {
    alert('123456789');
  }
}
