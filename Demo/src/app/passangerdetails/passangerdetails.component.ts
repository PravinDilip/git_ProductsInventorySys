import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-passangerdetails',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule,MatInputModule, MatSelectModule,
    ReactiveFormsModule,MatCardModule,MatRadioModule],
  templateUrl: './passangerdetails.component.html',
  styleUrl: './passangerdetails.component.scss'
})

export class PassangerdetailsComponent implements OnInit {
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  selected = 'option2';
  passangerForm:FormGroup | any;
  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(){
   this.passangerForm = this.formBuilder.group({
    checkInOut:["checkout"],
    seatnumber:['123']
   })
  }
  
  onSave(data:any){
    console.log("onsave in to the room");
  }

}
