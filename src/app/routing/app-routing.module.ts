import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { TasksComponent } from '../components/tasks/app-tasks.component';
import { AuthGuard } from '../guards/auth.guard';

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
		path: 'tasks',
		component: TasksComponent,
		canActivate: [AuthGuard],
		runGuardsAndResolvers: 'always',
		title: 'Inbox',
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
