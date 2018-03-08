import {Component,Inject, OnInit} from '@angular/core';
import {MatPaginator, MatSort,MatTable, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  displayedColumns = ['lead', 'email', 'phone', 'address', 'action'];
  constructor(public dialog: MatDialog, private _data: DataService, private router: Router) {}

  name: string;
  email: string;
  phone: number;
  address: string;

  elements = [];
  dataSource = null;
  openDialog() {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { phone: this.phone, name: this.name, email:this.email, address: this.address }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = this.elements;
      console.log('The dialog was closed',result);
    });
  }

  ngOnInit() {
    this._data.element.subscribe(res => this.elements = res);
    this.dataSource = this.elements;
  }

  addRow() {
    this.elements.push({name:'data.name',phone:8090, email: 'data.email', address: 'data.address'});
    this.dataSource = this.elements;
  }
  nextStep(index) {
    this.router.navigate(['details/'+index]);
  }
  remove(idx){
    
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
