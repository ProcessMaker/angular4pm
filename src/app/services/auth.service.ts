import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public authenticated: any;

	constructor(
		private http: HttpClient,
		private router: Router,
		private db: DbService
	) {}

	// Placeholder method for checking authentication status
	checkAuthStatus() {}

	// Method to initiate the OAuth login process
	login() {
		// Define the OAuth parameters
		const params = [
			'response_type=code',
			`client_id=${environment.clientId}`, // Use environment variable
			'scope=*',
			encodeURIComponent(`redirect_uri=${environment.redirectUri}`), // Use environment variable
		];
		// Redirect the user to the OAuth authorization endpoint
		window.location.href =
			environment.oauthAuthorizeUrl + '?' + params.join('&');
	}

	// Method to log out the user
	logout() {
		// Clear authentication status and local storage
		this.authenticated = false;
		this.db.clear();
		// Redirect the user to the login page
		this.router.navigateByUrl('login');
	}

	// Method to get the access token using the authorization code
	getAccessToken(code: string) {
		// Define the payload for the OAuth token request
		const payload = new HttpParams()
			.append('grant_type', 'authorization_code')
			.append('code', code)
			.append('client_secret', environment.clientSecret) // Use environment variable
			.append('client_id', environment.clientId); // Use environment variable

		// Make a POST request to the OAuth token endpoint
		this.http
			.post(
				environment.oauthUrl, // Use environment variable
				payload,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.subscribe(
				(response) => {
					// Check if the access token is present in the response
					if ((response as any)['access_token']) {
						// Save the access token and mark the user as authenticated
						this.db.save('access_token', (response as any)['access_token']);
						this.authenticated = true;
						this.router.navigateByUrl('tasks');
					} else {
						// If the access token is not present, mark the user as unauthenticated
						this.authenticated = false;
						this.router.navigateByUrl('login');
					}
				},
				(error) => {
					// Handle any errors that occur during the request
					console.error(
						'An error occurred while fetching the access token:',
						error
					);
					this.authenticated = false;
					this.router.navigateByUrl('login');
				}
			);
	}
}
