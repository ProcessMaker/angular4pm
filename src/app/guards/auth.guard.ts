import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	// Injecting AuthService to check authentication status and Router to navigate
	constructor(private authService: AuthService, private router: Router) {}

	// The canActivate method is called by Angular to determine if a route can be activated
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		// Perform additional authentication checks if needed
		this.authService.checkAuthStatus();

		// If the user is authenticated, allow the route activation
		if (this.authService.authenticated) {
			return true;
		} else {
			// If the user is not authenticated, redirect to the login page with the return URL
			// and deny the route activation
			this.router.navigate(['login'], {
				queryParams: { returnUrl: state.url },
			});
			return false;
		}
	}
}
