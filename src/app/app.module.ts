import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavigationComponent } from './components/nav/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ApiModule } from 'api';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NavigationComponent,
    FormComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
