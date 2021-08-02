import { Departament } from './models/Departament.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private departaments: Departament[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Computers' }
  ]

  private nextID: number = 5;

  constructor() { }

  getDepartaments(): Departament[] {
    return this.departaments;
  }

  getDepartamentById(id: number): Departament {
    return this.departaments.find(d => d.id === id);
  }

  addDepartment(d: Departament) {
    this.departaments.push({ ...d, id: this.nextID++ });
    console.log(this.departaments);
  }  
}