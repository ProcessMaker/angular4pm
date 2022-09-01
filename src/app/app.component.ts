import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pm4Angular';

  constructor(public authService: AuthService, commonModule: CommonModule) {

  }
}
