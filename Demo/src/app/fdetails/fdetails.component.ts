import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fdetails',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule,CommonModule,MatListModule,MatInputModule,FormsModule,MatCheckboxModule,MatListModule],
  templateUrl: './fdetails.component.html',
  styleUrl: './fdetails.component.scss'
})
export class FdetailsComponent {
  
  constructor(private route:Router){}
  typesOfShoes: string[] = ['Boots -seat no:12345', 'Clogs -seat no:12345', 'Loafers -seat no:12345', 'Moccasins -seat no:12345', 'Sneakers -seat no:12345','Boots -seat no:12345', 'Clogs -seat no:12345', 'Loafers -seat no:12345', 'Moccasins -seat no:12345', 'Sneakers -seat no:12345'];
  checked = false;
  indeterminate = true;

  ondetails(){
    this.route.navigate(['flights/details/passangers/',1]);
  }

}
