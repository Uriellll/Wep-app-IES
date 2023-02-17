import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    ) {
      if(localStorage.getItem('token')){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    
  }
  
}
