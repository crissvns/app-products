import { DepartamentService } from './../departament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
  styleUrls: ['./departament-form.component.css']
})
export class DepartamentFormComponent implements OnInit {

  depName: string;

  constructor(private departmetService: DepartamentService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.departmetService.addDepartment({
      name: this.depName
    });
    this.clear();
  }

  clear(): void {
    this.depName = "";
  }
}
