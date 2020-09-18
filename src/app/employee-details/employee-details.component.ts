import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { IEmployee } from '../employee';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public Employee = [];
  public result;
  public errorMsg = "";
  user: IEmployee;
  temp: IEmployee;
  disable: boolean = true;
  constructor(private _router: Router, private _service: MainServiceService) { }
  emp: IEmployee = new IEmployee();
  ngOnInit(): void {
    this.disable = false;
    this._service.EmployeeDetails()
      .subscribe(data => this.Employee = data);
    console.log(this.Employee);
  }
  add() {

    this._service.EmployeeAdd(this.emp)
      .subscribe(data => this.result = data,
        error => this.errorMsg = error);
    console.log("data" + " " + this.result)  ; 
      this._service.EmployeeDetails()
        .subscribe(data => this.Employee = data);
  }
  Edit() {
    this.temp = this.emp;
    console.log(this.temp);
    this.disable = false;
    console.log(this.disable);
    this._service.EmployeeEdit(this.emp)
      .subscribe(data => this.result = data,
        error => this.errorMsg = error);
    console.log("data" + " " + this.result);  
      this._service.EmployeeDetails()
        .subscribe(data => this.Employee = data);
  }
  Delete() {
    console.log(this.disable);
    this._service.EmployeeDelete(this.emp.name)
      .subscribe(data => this.result = data,
        error => this.errorMsg = error);
 
      this._service.EmployeeDetails()
        .subscribe(data => this.Employee = data);
    

  }



  SelectedRow(user: IEmployee) {
    console.log(this.emp);
    this.disable = true;
    this.emp = user;
  }

  Clear()
  {
    this.emp=new IEmployee();
    this.disable = false;
  }

}



