import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [

{
  path:'',
  component:LandingPageComponent,
  pathMatch:'full'
},
 {
  path:"home",
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'admin',
  component:AdminDashboardComponent,
  pathMatch:'full'
},
{
  path:'books',
  component:AllBooksComponent,
  pathMatch:'full'
},
{
  path:'users',
  component:AllUsersComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
