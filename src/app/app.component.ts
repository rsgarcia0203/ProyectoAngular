import { AuthService } from './providers/AuthService/auth.service';
import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'ProyectoAngular';
  user?: User | null;

  constructor(private auth:AuthService) {
    this.auth.user.subscribe(x => this.user = x);
  }

  public logout() {
    this.auth.logout();
  }
}
