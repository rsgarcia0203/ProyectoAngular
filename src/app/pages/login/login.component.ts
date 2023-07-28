import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  private redirect: Array<String> = ['/home'];

  constructor(
    @Optional() private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public async loginWith(provider: string) {
    try {
      switch (provider) {
        case 'google':
          await this.auth.loginWithGoogle();
          await this.router.navigate(this.redirect);
          break;
        case 'github':
          await this.auth.loginWithGithub();
          await this.router.navigate(this.redirect);
          break;
        case 'mail':
          await this.auth.loginWithMail(this.email, this.password);
          await this.router.navigate(this.redirect);
          break;
        case 'facebook':
          await this.auth.loginWithFacebook();
          await this.router.navigate(this.redirect);
          break;
        default:
          break;
      }
    } catch (error:any) {
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
