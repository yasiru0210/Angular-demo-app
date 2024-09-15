import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
   this.loadProductInfo();
    
  }

  public ProductList:any=[]

loadProductInfo(){
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>{
    this.ProductList=data;
    console.log( this.ProductList);
  })

}
  
}
