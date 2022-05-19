import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { HomePageComponent } from './components/user-dashboard/home-page/home-page.component';
import { MyMeetingPageComponent } from './components/user-dashboard/my-meeting-page/my-meeting-page.component';
import { NotFoundComponent } from './components/user-dashboard/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignUpComponent,
    NotFoundComponent,
    MyMeetingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
