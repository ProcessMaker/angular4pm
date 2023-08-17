import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
})
export class NavigationComponent {
	constructor(public authService: AuthService, public db: DbService) {}

	// Method to log out the user by calling the logout method from the AuthService
	logout() {
		this.authService.logout();
	}
}
