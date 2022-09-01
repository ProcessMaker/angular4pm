import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserAuth } from 'src/app/models/userAuth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm;
  constructor(private router: Router, public authService: AuthService) {
    this.loginForm = {
    instance: 'demojc-se.processmaker.net',
    clientId: '11',
    clientSecret: 'kERirlyY1G4tK0pzG7dtYLmqzJtGc72ARBN4joZZ',
    username: 'admin',
    password: 'p4ssw0rdJC!'

    }
}

  login(formData: UserAuth): void {
    this.authService.login(formData);
  }
}
