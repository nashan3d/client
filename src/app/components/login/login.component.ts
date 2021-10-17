import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @Input() userLoggedIn:boolean;
  loggedInUserName : string = "Nashan"
  constructor() { }

  ngOnInit(): void {
  }

}
