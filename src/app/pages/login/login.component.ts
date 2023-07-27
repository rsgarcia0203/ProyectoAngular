import { Component} from '@angular/core';
import { AuthService } from 'src/app/providers/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public email:string = '';
  public password:string = '';

  constructor(private auth:AuthService) {}

  public async loginWith(provider:string) {
    switch(provider) {
      case 'google':
        this.auth.loginWithGoogle();
        break;
      case 'github':
        this.auth.loginWithGithub();
        break;
      case 'mail':
        this.auth.loginWithMail(this.email, this.password);
        break;
      default:
        break;
    }
  }
}
