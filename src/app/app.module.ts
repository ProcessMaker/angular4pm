import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/root/app-root.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/app-tasks.component';
import { NavigationComponent } from './components/nav/navigation.component';
import { FormComponent } from './components/form/app-form.component';
import { ApiModule } from 'api';
import { FormElementComponent } from './components/form-element/app-form-element.component';
import { ScreenComponent } from './components/screen/app-screen.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TasksComponent,
		NavigationComponent,
		FormComponent,
		FormElementComponent,
		ScreenComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPaginationModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		ApiModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
