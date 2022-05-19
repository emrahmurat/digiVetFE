import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageForUserComponent } from './components/home-page-for-user/home-page-for-user.component';
import { HomePageForVetComponent } from './components/home-page-for-vet/home-page-for-vet.component';
import { LoginForUserComponent } from './components/login-for-user/login-for-user.component';
import { LoginForVetComponent } from './components/login-for-vet/login-for-vet.component';
import { SorguComponent } from './components/sorgu/sorgu.component';

const routes: Routes = [

  {path:'login-for-user',component: LoginForUserComponent},
  {path:'login-for-vet',component: LoginForVetComponent},
  {path:'sorgu',component : SorguComponent},
  {path:'user-home-page',component : HomePageForUserComponent},
  {path:'vet-home-page',component : HomePageForVetComponent},
  {path:'',redirectTo:"/sorgu",pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
