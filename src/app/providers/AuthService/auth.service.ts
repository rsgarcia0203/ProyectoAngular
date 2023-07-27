import { Injectable } from '@angular/core';

import {
  Auth,
  GoogleAuthProvider,
  User,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: User | null;

  constructor(private auth: Auth) {
    this.user$ = auth.currentUser; 
  }

  loginWithMail(mail:string, password:string) {
    return signInWithEmailAndPassword(this.auth, mail, password);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  loginWithGithub() {
    const provider = new GithubAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  logout() {
    this.auth.signOut();
  }

  get currentUser(): User | null {
    return this.user$;
  }
}
