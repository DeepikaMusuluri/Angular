import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-loginpage',
  template: `
  <style>
  .main-section{
    width: 460px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content-section{
    background: #FFF;
    border-radius: 2px;
    box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.1);
  }
  .head-section{
    background: #F3F3F3;
    text-align: center;
    padding: 15px 0px;
    border-bottom: 1px solid #CECECE;
  }
  .head-section h3{
    margin: 0px;
    color: #565656;
  }
  .body-section{
    padding:15px 30px 30px 30px;
    overflow: hidden;
  }
  .body-section .form-input{
    width: 100%;
    padding: 15px 0px;
  }
  .body-section .form-input input[type='text']{
    width: calc(100% - 30px);
    border: 1px solid #D3D3D3;
    border-radius: 1px;
    padding:10px 10px;
    box-shadow: 0px 0px 0px 5px rgb(239,244,247);
  }
  .body-section .form-input input[type='checkbox']{
    float: left;
  }
  .body-section label{
    color: #565656;
    padding: 1px 5px;
    float: left;
  }
  .body-section .btn-submit{
    float: right;
    background: #DEEDF4;
    border:1px solid #B5CBCD;
    color: #56778E;
    font-weight: bold;
    padding:7px 20px;
    border-radius: 15px;
  }
  .footer-section{
    color: #B5CBCD;
    text-align: center;
    padding-top: 15px;
    font-size: 12px;
  }
  .footer-section a{
    color:#DEEDF4;
    font-weight: bold;
    text-decoration: none;
  }
  .image
  {
  background-image: url(/assets/background/rohan-aggarwal.jpg);
  
  }
</style>  
  <img src="/assets/backgroud/rohan-aggarwal.jpg" width="1500" height="800">

	<div class="main-section">
		<div class="content-section">
			<div class="head-section">
				<h3>Login</h3>
			</div>
			<div class="body-section">
				<form>
					<div class="form-input">
						<input type="text"  #UName placeholder="Username or Email">
					
					</div>
					<div class="form-input">
						<input type="text"  #PWD   placeholder="Password">
					</div>
					<div class="form-input">
						<input type="checkbox" name=""> <label>Remember me on this computer</label>
						<button type="button" (click)="onSubmit(UName.value,PWD.value)"class="btn-submit">Login</button>	
						<div *ngIf="loginResult">
							
							<a class="nav-link"  routerLink = "['/employee']" routerLinkActive="active"> </a>
							</div>
							<div *ngIf="!loginResult">
							<h5> incorrect user name or password</h5>
						</div>
						
					</div>
					
				</form>
			</div>
		</div>
		<div class="footer-section">
			<a href="">Forgot your password?</a>&nbsp;&nbsp; <span>Click here to reset it.</span>
	</div>
	</div>
  `,
  styles: [
      
  ]
})
export class LoginpageComponent implements OnInit {

  title = 'POC';
  public  Username='';
  public  Password='';
  public  loginDetails:string="";
  public errorMsg="";
  public loginResult:boolean;

  
  constructor(  private _router:Router, private _service:MainServiceService) {
    
  }
  onSubmit(Uname:string,pwd:string)
  {
    
    this._service.submit(Uname,pwd)
    .subscribe(data =>this.loginDetails=data,
      error=>this.errorMsg=error);   
      console.log("data"+" "+this.loginDetails)  
      if(this.loginDetails=='Welcome back') {
      this.loginResult=true;   
      let a=this._router.navigate(['/employeeDetails']);
    }
      
  }
 


  ngOnInit(): void {
  }

}
