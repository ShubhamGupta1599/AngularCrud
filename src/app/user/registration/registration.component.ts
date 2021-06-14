import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide:boolean=true;
  formData:FormGroup;
  constructor(
    private fb:FormBuilder,
    private _service:UserService,
    public Registrationmodel:Registration    
    ) { }

  ngOnInit(): void {
    this.formData=this.fb.group({
      id:['0',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }
  onSubmit(){
    console.warn(this.formData);
  }

}
