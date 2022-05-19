import { Component, OnInit } from '@angular/core';
import { VetLoginDto } from 'src/app/dto/vet-login-dto';
import { LoginForUserBodyComponent } from '../login-for-user/login-for-user-body/login-for-user-body.component';
import { LoginForVetComponent } from '../login-for-vet/login-for-vet.component';

@Component({
  selector: 'app-home-page-for-vet',
  templateUrl: './home-page-for-vet.component.html',
  styleUrls: ['./home-page-for-vet.component.css']
})
export class HomePageForVetComponent implements OnInit {

  constructor() { }

  vetLoginDto: VetLoginDto

  ngOnInit(): void {

  }
  alertMessage(){
    this.vetLoginDto = new VetLoginDto()

    console.log()
  }


}
