import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminLoginDto } from 'src/app/dto/admin-login-dto';
import { AdminLoginService } from 'src/app/services/admin-login-services/admin-login.service';
interface AppState{
  message: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  message$ :Observable<String>;

  constructor(private vetLoginService:AdminLoginService,private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  List: String[] = []
  state: any;
  loginClick(email:string,password:string){
    let adminLoginDto = new AdminLoginDto(email,password)

    this.store.dispatch({type: email})

    this.state = this.vetLoginService.getLogin(adminLoginDto).subscribe(data =>{adminLoginDto = data;console.log(data)})
    return this.state
    }
}
