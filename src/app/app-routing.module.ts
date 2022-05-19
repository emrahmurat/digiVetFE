import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/user-dashboard/not-found/not-found.component';

const routes: Routes = [
  {path:'login',component : LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () =>
    import('./components/user/user.module').then((m) => m.UserModule)
    },
    {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
