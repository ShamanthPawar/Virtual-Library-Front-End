import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [

{
  path:'',
  component:LandingPageComponent,
  pathMatch:'full'
},
{
  path:'admin-login',
  component:AdminLoginComponent,
  pathMatch:'full'
},
{
  path:'user-login',
  component:UserLoginComponent,
  pathMatch:'full'
},
{
  path:'user-register',
  component:UserRegisterComponent,
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'dashboard',
  component:DashboardComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
