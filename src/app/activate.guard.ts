import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
import {UserserviceService} from './userservice.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private userservice:UserserviceService,
    private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
    if(this.userservice.isAdminRights()){
      
    }else{
      alert("you don't have permission to view this page, Redirecting to Home");
      this.router.navigate(['Home'])
    }
    return true;
  }
  
}
