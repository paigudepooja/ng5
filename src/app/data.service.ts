import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  public elements = new BehaviorSubject<any>([
    {id: 0,phone: 1231231231, name: 'Hydrogen',email:'emailname.@domain.com',address: 'Pune'},
    {id: 1,phone: 1231231232, name: 'Helium', email:'emailname.@domain.com', address: 'New York'},
    {id: 2,phone: 1231231233, name: 'Lithium', email:'emailname.@domain.com', address: 'London'},
    {id: 3,phone: 1231231234, name: 'Beryllium', email:'emailname.@domain.com', address: 'London'},
    {id: 4,phone: 1231231235, name: 'Boron', email:'emailname.@domain.com', address: 'London'},
    {id: 5,phone: 1231231236, name: 'Carbon', email:'emailname.@domain.com', address: 'London'},
    {id: 6,phone: 1231231237, name: 'Nitrogen', email:'emailname.@domain.com', address: 'London'},
    {id: 7,phone: 1231231238, name: 'Oxygen', email:'emailname.@domain.com', address: 'London'},
    {id: 8,phone: 1231231239, name: 'Fluorine', email:'emailname.@domain.com', address: 'London'},
    {id: 9,phone: 12312312310, name: 'Neon', email:'emailname.@domain.com', address: 'London'},
    {id: 10,phone: 12312312311, name: 'Sodium', email:'emailname.@domain.com', address: 'London'},
    {id: 11,phone: 12312312312, name: 'Magnesium', email:'emailname.@domain.com', address: 'London'},
    {id: 12,phone: 12312312313, name: 'Aluminum', email:'emailname.@domain.com', address: 'London'},
    {id: 13,phone: 12312312314, name: 'Silicon', email:'emailname.@domain.com',address: 'London'},
    {id: 14,phone: 12312312315, name: 'Phosphorus', email:'emailname.@domain.com', address: 'London'},
    {id: 15,phone: 12312312316, name: 'Sulfur', email:'emailname.@domain.com', address: 'London'},
    {id: 16,phone: 12312312317, name: 'Chlorine', email:'emailname.@domain.com', address: 'London'}
  ]);
  element = this.elements.asObservable();

  constructor() { }

  changeElement(element) {
    this.elements.next(element);
  }

  // getHero(id: number): Observable<Hero> {
  //   // Todo: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

}
