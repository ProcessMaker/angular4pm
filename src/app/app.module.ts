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
import { MultiColumnComponent } from './components/form-element/elements/muti-column/app-multi-column.component';
import { InputComponent } from './components/form-element/elements/input/app-element-input.component';
import { AppElementDefaultComponent } from './components/form-element/elements/default/app-element-default.component';
import { ButtonComponent } from './components/form-element/elements/buttons/app-element-button.component';
import { AppBreadcrumbsComponent } from './components/app-breadcrumbs/app-breadcrumbs.component';
import { AppElementHtmlViewerComponent } from './components/form-element/elements/html-viewer/app-element-html-viewer.component';
import { AppElementImageComponent } from './components/form-element/elements/image/app-element-image.component';
import { AppElementUploadFileComponent } from './components/form-element/elements/upload-file/app-element-upload-file.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		TasksComponent,
		NavigationComponent,
		FormComponent,
		FormElementComponent,
		ScreenComponent,
		MultiColumnComponent,
		InputComponent,
		ButtonComponent,
		AppBreadcrumbsComponent,
		AppElementDefaultComponent,
		AppElementHtmlViewerComponent,
		AppElementImageComponent,
		AppElementUploadFileComponent,
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
