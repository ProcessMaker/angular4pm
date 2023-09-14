import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './app-breadcrumbs.component.html',
})
export class AppBreadcrumbsComponent implements OnInit {
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

	ngOnInit(): void {}
	currentPageTitle() {
		return (this.title = window.document.title);
	}
	homePageTitle() {
		return (this.homeCrumb = 'Home');
	}
}
