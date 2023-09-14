import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		runGuardsAndResolvers: 'always',
		title: 'Login',
	},
	{
		path: 'oauth/callback',
		component: LoginComponent,
		runGuardsAndResolvers: 'always',
	},
	{
		path: '',
		redirectTo: 'tasks',
		pathMatch: 'full',
		runGuardsAndResolvers: 'always',
	},
	{
		path: '**',
		redirectTo: 'tasks',
		runGuardsAndResolvers: 'always',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
