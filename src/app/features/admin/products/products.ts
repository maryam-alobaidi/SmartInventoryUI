import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { NgClass,CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core'; 

@Component({
  selector: 'app-products',
  imports: [NgClass,CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

handleImageError(event: Event) {
  const target = event.target as HTMLImageElement;
  if (target) {
    target.src = 'no-image.png';
  }
} 


productService=inject(ProductService);
  cdr=inject(ChangeDetectorRef);
  productList:Product[]=[];

  ngOnInit():void{
   this.loadProducts();
  }

    loadProducts(){
      return this.productService.getAllProducts().subscribe({
        next:(data)=>{
         this.productList =[...data]; 
         this.cdr.detectChanges();
         console.log(this.productList)
        
      },
      error: (err) => {
        console.error('Error', err);
      }
      })
    }
  
}
