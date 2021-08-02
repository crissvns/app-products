import { DepartamentService } from './departament.service';
import { Product } from './models/product.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop', departament_id: 4, price: 40, description: 'Laptop'},
    { id: 2, name: 'Shirt', departament_id: 1, price: 10, description: 'Laptop'},
    { id: 3, name: 'Polo', departament_id: 1, price: 20, description: 'Laptop'},
    { id: 4, name: 'Mouse', departament_id: 4, price: 10, description: 'Laptop'},
    { id: 5, name: 'Keyboad', departament_id: 4, price: 15, description: 'Laptop'},
  ]

  private nextID: number = 6;

  private products: Product[] = []

  constructor(private departamentService: DepartamentService) { 
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        departament: this.departamentService.getDepartamentById(p.departament_id)
      });
      this.nextID = p.id;
    }    
  }

  getProduct(): Product[] {
    return this.products;
  }

  addProduct(p: Product){
    p.id = this.nextID++;
    
    this.products.push(p);
    this.onNewProduct.emit(p);
  }
}
