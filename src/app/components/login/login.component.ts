import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
accessToken: any;
  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute) {}

ngOnInit() {
  this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']) {
        this.authService.getAccessToken(params['code']);
      }
  });
}
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
