import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-registeration',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './product-registeration.component.html',
  styleUrl: './product-registeration.component.css'
})
export class ProductRegisterationComponent {
 
  public product={
    id:null,
    name:null

   }

   register(){
    console.log(this.product)

   }

}
