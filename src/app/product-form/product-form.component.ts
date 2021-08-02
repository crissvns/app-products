import { DepartamentService } from './../departament.service';
import { ProductService } from './../product.service';
import { Departament } from './../models/Departament.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  price: number;
  description: string;
  department: Departament;
  departments: Departament[];

  constructor(private productService: ProductService, private departamentService: DepartamentService) { }

  ngOnInit(): void {
    this.departments = this.departamentService.getDepartaments();
  }

  save(): void {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      departament: this.department
    });
    this.clear();
  }

  clear(): void {
    this.name = "";
    this.price = 0;
    this.description = "";
    this.department = null;
  }
}
