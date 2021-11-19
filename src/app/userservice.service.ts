import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isAdminRights: any;

  constructor() { }
  isAdminrights(): boolean
  {
    return false;
  }
    
  
}
