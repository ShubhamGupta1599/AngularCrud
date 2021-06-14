import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const userModule = ()=>import('./user/user.module').then(mod=>mod.UserModule);
const homeModule = ()=>import('./layout/home.module').then(mod=>mod.HomeModule);
const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {path:'user',loadChildren:userModule},
  {path:'home',loadChildren:homeModule,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'/user/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
