import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';

export const routes: Routes = [{
    path:'',
    component:LoginComponent
    },
    {  path:'flights',
      component:FlightsComponent 
    },{
      path:'flights/details',
      component:FlightsComponent
    }
];
