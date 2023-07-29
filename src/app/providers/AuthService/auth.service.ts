import { Observable, map, Subscription, EMPTY } from 'rxjs';
import { Injectable, OnDestroy, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {
  Auth,
  GoogleAuthProvider,
  User,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signOut,
  authState,
} from '@angular/fire/auth';
import { traceUntilFirst } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
  private readonly userDisposable: Subscription | undefined;
  public readonly user: Observable<User | null> = EMPTY;

  constructor(
    @Optional() private auth: Auth,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth)
        .pipe(
          traceUntilFirst('auth'),
          map((u) => !!u)
        )
        .subscribe((isLoggedIn) => {
          if (isLoggedIn) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/account/login']);
          }
        });
    }
  }

  public async loginWithMail(mail: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, mail, password);
    } catch (error) {
      this.toastr.error('Mensaje de error', 'Título del error');
    }
  }

  public async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  public async loginWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  public async loginWithFacebook(): Promise<void> {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  public async logout() {
    this.router.navigate(['/account/login']);
    return await signOut(this.auth);
  }

  get userValue() {
    return this.auth.currentUser?.uid;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }
}
