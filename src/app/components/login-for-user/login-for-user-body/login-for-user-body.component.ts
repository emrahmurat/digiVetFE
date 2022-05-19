import { Component, OnInit } from '@angular/core';
import { UserDetailsRequestModel } from 'src/app/dto/user-details-request';
import { userLoginDto } from 'src/app/dto/user-login-dto';
import { UserLoginService } from 'src/app/services/user-login-service/user-login.service';

@Component({
  selector: 'app-login-for-user-body',
  templateUrl: './login-for-user-body.component.html',
  styleUrls: ['./login-for-user-body.component.css'],
  providers: [UserLoginService]
})

export class LoginForUserBodyComponent implements OnInit {

  constructor(private userLoginService:UserLoginService) { }
  ngOnInit(): void {

  }
  //private userLoginService:UserLoginService



  loginDto: userLoginDto;
  userDetailsDto : UserDetailsRequestModel;

  loginClick(email:any,password:any): any{

    this.loginDto = new userLoginDto()
    this.loginDto.ctor(email,password)
    return this.userLoginService.getLogin(this.loginDto).subscribe(data => {this.loginDto = data;console.log(data)}  );
  }

  saveClick(firstName: any,
    lastName: any,
    email: any,
    password: any,
    city: any,
    country: any,
    adress: any){
      alert("kaydınız başarı ile oluşturulmuştur..")
      this.userDetailsDto = new UserDetailsRequestModel(firstName,lastName,email,password,city,country,adress)
      return this.userLoginService.getCreate(this.userDetailsDto).subscribe(data =>{this.userDetailsDto = data})
    }

}
