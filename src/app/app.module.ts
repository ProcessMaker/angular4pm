import { NgModule } from '@angular/core';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routing/app-routing.module';
import { RootComponent } from './components/root/app-root.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/nav/navigation.component';
import { AppBreadcrumbsComponent } from './components/breadcrumbs/app-breadcrumbs.component';
import { TasksComponent } from './components/tasks/app-tasks.component';

@NgModule({
	declarations: [
		RootComponent,
		LoginComponent,
		NavigationComponent,
		AppBreadcrumbsComponent,
		TasksComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [RootComponent],
})
export class AppModule {}
