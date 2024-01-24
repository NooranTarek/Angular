import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  template: '<button (click)="downloadPdf()">Download PDF</button>',

})
export class AboutMeComponent {
  education: string = 'Bachelor of Information System and Computer Science ';
  faculty:string='Faculty of computer science and artificial intelligence';
  university:string='Helwan university';
  year:string='10/2019  05/2023'
  downloadPdf() {
    const pdfUrl = '/assets/files/cv.pdf';
    saveAs(pdfUrl, 'downloaded-pdf-cv.pdf');
  }
};
