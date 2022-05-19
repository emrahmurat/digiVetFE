import { Component, OnInit } from '@angular/core';
import { VetDetailsRequest } from 'src/app/dto/vet-details-request';
import { VetLoginDto } from 'src/app/dto/vet-login-dto';
import { VetLoginService } from 'src/app/services/vet-login-service/vet-login.service';

@Component({
  selector: 'app-login-for-vet',
  templateUrl: './login-for-vet.component.html',
  styleUrls: ['./login-for-vet.component.css'],
  providers: [VetLoginService]

})
export class LoginForVetComponent implements OnInit {

  constructor(private vetLoginService:VetLoginService) { }

  ngOnInit(): void {
  }

  List: String[] = []

  vetLoginDto : VetLoginDto
  loginClick(email:string,password:string){
    this.vetLoginDto = new VetLoginDto()
    this.vetLoginDto.ctor(email,password)

    return this.vetLoginService.getLogin(this.vetLoginDto).subscribe(data =>{this.vetLoginDto = data;console.log(data)})
  }

  vetDetailsRequest : VetDetailsRequest
  submitClick(firstName: string,
    lastName: string,
    email: string,
    password: string,
    city: string,
    country: String,
    branch: string ,
    hospital: string,
    adress: string){
      this.vetDetailsRequest = new VetDetailsRequest(firstName,lastName,email,password,city,country,branch,hospital,adress);
      return this.vetLoginService.getCreate(this.vetDetailsRequest).subscribe(data => {this.vetDetailsRequest = data;console.log(data)})
    }
}
