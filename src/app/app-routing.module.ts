import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [  
  {path:"first",component:LoginpageComponent},
  {path:'employeeDetails',component: EmployeeDetailsComponent},
  { path: '',   redirectTo: '/first', pathMatch: 'full' },
  {path:"**", component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
