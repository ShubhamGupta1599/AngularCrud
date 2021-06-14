import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { Login, Registration } from '../models/User.model';


@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    Registration,
    Login,    
  ],
})
export class UserModule { }
