import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  private apiUrl = 'https://localhost:7134/api/Products';

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
