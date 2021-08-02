import { Departament } from './Departament.model';

export interface Product {
    id?: number,
    name: string,
    price: number,
    description: string,
    departament: Departament
}