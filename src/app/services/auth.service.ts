import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public apiUrl: string;
	public authenticated: any;

	constructor(
		private http: HttpClient,
		private router: Router,
		private db: DbService
	) {}

	checkAuthStatus() {}

	login() {
		const params = [
			'response_type=code',
			'client_id=7',
			'scope=*',
			encodeURIComponent('redirect_uri=http://localhost:4200/#/oauth/callback'),
		];
		window.location.href =
			'http://playground.innovations.processmaker.io/oauth/authorize?' +
			params.join('&');
	}

	logout() {
		this.authenticated = false;
		this.db.clear();
		this.router.navigateByUrl('login');
	}

	getAccessToken(code: string) {
		const payload = new HttpParams()
			.append('grant_type', 'authorization_code')
			.append('code', code)
			.append('client_secret', '4l6yS0GO8mvWThkwVUEfuGBX7YIAndeTu8Dk4obY')
			.append('client_id', '7');
		this.http
			.post(
				'http://playground.innovations.processmaker.io/oauth/token',
				payload,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.subscribe((response) => {
				if (response['access_token']) {
					this.db.save('access_token', response['access_token']);
					this.authenticated = true;
					this.router.navigateByUrl('tasks');
				} else {
					this.authenticated = false;
					this.router.navigateByUrl('login');
				}
			});
	}
}
