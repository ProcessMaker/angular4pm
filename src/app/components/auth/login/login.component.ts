import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAuth } from 'src/app/models/userAuth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  instance = 'demojc-se.processmaker.net';
  // loginForm(userAuth: UserAuth){
  //   return new userAuth(
  //     'demojc-se.processmaker.net',
  //     '11',
  //     'kERirlyY1G4tK0pzG7dtYLmqzJtGc72ARBN4joZZ',
  //     'admin',
  //     'p4ssw0rdJC!'
  //   );
  // }

  ngOnInit(): void {}

  login(formData: UserAuth): void {
    this.authService.login(formData);
  }
}
