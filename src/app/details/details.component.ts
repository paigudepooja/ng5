import {Component,Inject, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  elements = [];
  data = null;
  constructor( private _data: DataService, private route: ActivatedRoute, private location: Location ) { }


    ngOnInit() {
      this._data.element.subscribe(res => this.elements = res);
      console.log(this.elements);
      this.loadData();
    }

    loadData(){
      const id = +this.route.snapshot.paramMap.get('id');
      for( var i in this.elements ){
        if( id == this.elements[i].id ){
          this.data = this.elements[i];
        }
      }
    }

    goBack(){
      this.location.back();
    }

    onNoClickAdd(){
      this.elements.push({name:'data.name',phone:123123213123, email: 'data.email', address: 'data.address'});
      this._data.changeElement(this.elements);
    }

}
