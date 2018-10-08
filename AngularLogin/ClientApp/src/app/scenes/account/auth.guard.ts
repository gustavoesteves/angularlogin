import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    var subject = new Subject<boolean>();

    this.authService.validateCookie().subscribe((result: any) => {
      if (result.error.text !== undefined) {
        this.authService.setUsername(result.error.text);
        this.authService.setLogged(true);
        subject.next(true);
      } else {
        subject.next(false);
        this.router.navigate(['/Home']);
      }
    });

    return subject.asObservable();
  }
 
}
