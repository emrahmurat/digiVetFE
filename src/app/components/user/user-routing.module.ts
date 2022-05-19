import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-dashboard',
    loadChildren: () =>
    import('../user-dashboard/user-dashboard/user-dashboard.module').then((m) => m.UserDashboardModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
