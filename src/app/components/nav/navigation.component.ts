import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
})
export class NavigationComponent {
	title: any;
	homeCrumb: any;
	currentCrumb: any;
	constructor(
		public authService: AuthService,
		public db: DbService,
		public route: ActivatedRoute,
		public router: Router,
		public browserModule: BrowserModule
	) {}

	// Method to log out the user by calling the logout method from the AuthService
	logout() {
		this.authService.logout();
	}
	currentPageTitle() {
		return (this.title = window.document.title);
	}
	homePageTitle() {
		return (this.homeCrumb = 'Home');
	}
}
