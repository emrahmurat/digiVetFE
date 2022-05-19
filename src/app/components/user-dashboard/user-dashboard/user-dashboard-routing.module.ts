import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { MyMeetingPageComponent } from '../my-meeting-page/my-meeting-page.component';

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  {path:'my-meeting-page', component:MyMeetingPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
