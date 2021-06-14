import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean=true;
  password = '';
  formData: FormGroup;
  constructor(
    private fb:FormBuilder,
    private _service:UserService,
    public loginmodel:Login,   
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.formData=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    })
  }
  onSubmit(){
    this._service.login(this.formData.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this.formData.reset();
        this.router.navigateByUrl('/home');
      },
      (error:any)=>{
        if(error.status==400){
          console.warn("User Id Not Found");
        }
      }
    )
  }

}
