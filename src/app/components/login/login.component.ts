import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor() {}

  loginWith(OAuthProvider:string){
    console.log(OAuthProvider);
  }
}
