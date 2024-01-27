import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() productItem: any;
  constructor(private router : Router){}
  
  redirectToDetails(id : string){
    this.router.navigate(['productDetails' , id])
    console.log(id);
    
 }
}
