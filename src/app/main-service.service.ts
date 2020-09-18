import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  constructor(private http: HttpClient) { }
  submit(Uname: string, pwd: string): Observable<string> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', }), params: {
        UserName: Uname,
        Password: pwd
      }, responseType: 'text' as 'json'
    };

    return this.http.get<string>("http://localhost:8080/Main", httpOptions).pipe(

      retry(1),

      catchError(this.handleError)

    )
  }
  EmployeeDetails(): Observable<IEmployee[]> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.get<IEmployee[]>("http://localhost:8080/EmployeeDetails", httpOptions).pipe(

      retry(1),

      catchError(this.handleError)

    )
  }
  EmployeeAdd(employee: IEmployee): Observable<IEmployee[]> {

    console.log(employee);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}), params: {
       employee
      }

    };
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post<IEmployee[]>("http://localhost:8080/addEmployeeDetails", httpOptions).pipe(

      retry(1),

      catchError(this.handleError)

    )
  }
  EmployeeEdit(employee: IEmployee): Observable<IEmployee[]> {

    console.log(employee);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}), params: {
        employee
      }, responseType: 'text' as 'json'

    };
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.put<IEmployee[]>("http://localhost:8080/editEmployeeDetails", httpOptions).pipe(

      retry(1),

      catchError(this.handleError)

    )
  }
  EmployeeDelete(name:String): Observable<IEmployee[]> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}), params: {
        name
      }

    };
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    console.log(name);
    return this.http.delete<IEmployee[]>("http://localhost:8080/deleteEmployeeDetails/" +name)
  }
  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;
      console.log("errormessage" + errorMessage);

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log("errormessage" + errorMessage);
    }

    window.alert(errorMessage);

    return throwError(errorMessage);

  }

}


