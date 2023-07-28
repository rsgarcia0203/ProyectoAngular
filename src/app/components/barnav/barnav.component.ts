import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/providers/AuthService/auth.service';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent implements OnInit {
  public user:User | null = null;
  
  constructor (private readonly auth:AuthService){ }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }
}
