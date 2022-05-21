import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginForUserComponent } from './components/login-for-user/login-for-user.component';
import { LoginForVetComponent } from './components/login-for-vet/login-for-vet.component';
import { SorguComponent } from './components/sorgu/sorgu.component';
import { HomePageForVetComponent } from './components/home-page-for-vet/home-page-for-vet.component';
import { HomePageForUserComponent } from './components/home-page-for-user/home-page-for-user.component';
import { LoginForUserBodyComponent } from './components/login-for-user/login-for-user-body/login-for-user-body.component';
import { HttpClientModule } from '@angular/common/http';
import { simpleReducer } from './SimpleReducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginForUserComponent,
    LoginForVetComponent,
    SorguComponent,
    HomePageForVetComponent,
    HomePageForUserComponent,
    LoginForUserBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ message: simpleReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
