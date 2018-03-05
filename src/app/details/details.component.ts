import {Component,Inject, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  elements = [];

  constructor( private _data: DataService ) { }


    ngOnInit() {
      this._data.element.subscribe(res => this.elements = res);
      console.log(this.elements)
    }

    onNoClickAdd(){
      this.elements.push({name:'data.name',phone:123123213123, email: 'data.email', address: 'data.address'});
      this._data.changeElement(this.elements);
    }

}
