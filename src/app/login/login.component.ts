import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  username: string | undefined;
password: string | undefined;

  ngOnInit(): void {
  }
  login() : void {
    if(this.username== '' && this.password == ''){
    
    }
    else {
      alert("Invalid credentials");
    }
  }

}
