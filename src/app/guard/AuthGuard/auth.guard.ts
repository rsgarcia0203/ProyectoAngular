import { CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../../providers/AuthService/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth:AuthService = inject(AuthService);
  const router:Router = inject(Router);
  
  if(auth.userValue) {
    console.log(auth.userValue)
    return true;
  }

  router.navigate(['/account/login'], { queryParams: { returnUrl: state.url}})
  return false;
};
