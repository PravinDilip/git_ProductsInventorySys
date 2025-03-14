import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { PassangerdetailsComponent } from './passangerdetails/passangerdetails.component';

export const routes: Routes = [{
    path:'',
    component:LoginComponent
    },
    {  path:'flights',
      component:FlightsComponent 
    },
    {
      path:'flights/details',
      component:FdetailsComponent
    },
    {
      path:'flights/details/passangers/:id',
      component:PassangerdetailsComponent
    }
];
