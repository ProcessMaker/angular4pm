import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	// Injecting AuthService and ActivatedRoute to handle authentication and route parameters
	constructor(
		public authService: AuthService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		// Subscribing to query parameters to detect the authorization code
		this.activatedRoute.queryParams.subscribe((params) => {
			// Checking if the 'code' parameter is present
			if (params['code']) {
				// Calling getAccessToken method in AuthService to handle the OAuth token exchange
				// No need for then or catch here as the AuthService method takes care of the response handling
				this.authService.getAccessToken(params['code']);
			}
		});
	}

	// Method to initiate the login process by calling the login method in AuthService
	login() {
		this.authService.login();
	}

	// Method to initiate the logout process by calling the logout method in AuthService
	logout() {
		this.authService.logout();
	}
}
