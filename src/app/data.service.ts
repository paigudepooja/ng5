import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  public elements = new BehaviorSubject<any>([
    {phone: 1231231231, name: 'Hydrogen',email:'emailname.@domain.com',address: 'Pune'},
    {phone: 1231231232, name: 'Helium', email:'emailname.@domain.com', address: 'New York'},
    {phone: 1231231233, name: 'Lithium', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231234, name: 'Beryllium', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231235, name: 'Boron', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231236, name: 'Carbon', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231237, name: 'Nitrogen', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231238, name: 'Oxygen', email:'emailname.@domain.com', address: 'London'},
    {phone: 1231231239, name: 'Fluorine', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312310, name: 'Neon', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312311, name: 'Sodium', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312312, name: 'Magnesium', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312313, name: 'Aluminum', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312314, name: 'Silicon', email:'emailname.@domain.com',address: 'London'},
    {phone: 12312312315, name: 'Phosphorus', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312316, name: 'Sulfur', email:'emailname.@domain.com', address: 'London'},
    {phone: 12312312317, name: 'Chlorine', email:'emailname.@domain.com', address: 'London'}
  ]);
  element = this.elements.asObservable();

  constructor() { }

  changeElement(element) {
    this.elements.next(element);
  }

}
