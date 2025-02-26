import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormArray,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule, MatInputModule, MatSelectModule,CommonModule,ReactiveFormsModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{

  loginform:any;
  constructor(public formBuilder:FormBuilder,private routes:Router){}

  ngOnInit(): void {
    this.loginform =this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  onSave(values:any){
    console.log('data',values);
    this.routes.navigate(['flights'])
  }

}
