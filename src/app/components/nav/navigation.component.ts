import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
})
export class NavigationComponent {
	constructor(public authService: AuthService, public db: DbService) {}

	logout() {
		this.authService.logout();
	}
}
