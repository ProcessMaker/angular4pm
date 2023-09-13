import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
