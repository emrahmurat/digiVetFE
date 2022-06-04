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

  {
    path: 'vet-home-page',
    loadChildren: () =>
    import('./components/home-page-for-vet/vet-routing.module').then((m) => m.VetRoutingModule)
    },
    {
      path: 'user-home-page',
      loadChildren: () =>
      import('./components/home-page-for-user/user-routing.module').then((m) => m.UserRoutingModule)
      },
    /*
  {path:'user-meeting',component: UserMeetingComponent},
  {path:'user-profile',component: UserProfileComponent},
  {path:'user-source-clinic', component: UserSearchClinicComponent},
  {path:'vet-meeting',component: VetMeetingComponent},
  {path:'vet-profile',component: VetProfileComponent},

  {path:'vet-source-clinic',component: VetSearchComponent},*/
  {path:'',redirectTo:"/sorgu",pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
