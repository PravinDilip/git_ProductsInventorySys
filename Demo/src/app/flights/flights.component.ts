import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
    
const ELEMENT_DATA: any[] = [
   {position: 1, form: 'Hydrogen', to: 'Goa', price: 'H'},
   {position: 2, form: 'Helium', to: 'Goa', price: 'He'},
   {position: 3, form: 'Lithium', to: 'Goa', price: 'Li'},
   {position: 4, form: 'Beryllium', to: 'Goa', price: 'Be'},
   {position: 5, form: 'Boron', to:'Goa', price: 'B'},
   {position: 6, form: 'Carbon', to:'Goa', price: 'C'},
   {position: 7, form: 'Nitrogen', to:'Goa', price: 'N'}
 ];

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss'
})
export class FlightsComponent {
  displayedColumns: string[] = ['position', 'form', 'to', 'price'];
  dataSource = ELEMENT_DATA;
  constructor(private routes:Router){}

  getRecord(value:any){
    console.log("we are in the room",value)
    this.routes.navigate(['flights/details']);
  }
}
