// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//
//   itemCount: number = 4;
//   btnText: string = 'Add an Item';
//   goalText: string = 'My first life goal';
//
//   goals = [];
//   constructor() { }
//
//   ngOnInit() {
//     this.itemCount = this.goals.length;
//   }
//
//   addItem() {
//     this.goals.push(this.goalText);
//     this.goalText = '';
//     this.itemCount = this.goals.length;
//   }
//
// }
import {Component,Inject, OnInit} from '@angular/core';
import {MatPaginator, MatSort,MatTable, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns = ['lead', 'email', 'phone', 'address'];
  constructor(public dialog: MatDialog, private _data: DataService) {}

  name: string;
  email: string;
  phone: number;
  address: string;

  elements = [];
  dataSource = null;
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { phone: this.phone, name: this.name, email:this.email, address: this.address }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this._data.element.subscribe(res => this.elements = res);
    this.dataSource = this.elements;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'home.component.popup-dialouge.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _data: DataService) { }
  elements = [];

  ngOnInit() {
    this._data.element.subscribe(res => this.elements = res);
    this._data.changeElement(this.elements);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onNoClickAdd(data): void {
    this.elements.push({name:data.name,phone:data.phone, email: data.email, address: data.address});
    this._data.changeElement(this.elements);
    this.dialogRef.close();
  }

}
