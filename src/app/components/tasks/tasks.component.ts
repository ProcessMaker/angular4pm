import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
	ApiModule,
	ProcessRequestsService,
	TasksService,
	UsersService,
} from 'api';
import { DbService } from 'src/app/services/db.service';
import { FormComponent } from '../form/form.component';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
	pagination = {
		currentPage: 1,
		itemsPerPage: 10,
		lastPage: null,
		totalItems: null,
	};

	selectedRequest: Request;
	selectedTask: Task;
	userTasks = [];
	color = 'green';
	form;

	constructor(
		private api: ApiModule,
		private requestApi: ProcessRequestsService,
		private usersApi: UsersService,
		private tasksApi: TasksService,
		private route: ActivatedRoute,
		private router: Router,
		private db: DbService
	) {}
	ngOnInit() {
		this.tasksApi.configuration.credentials['pm_api_bearer'] =
			this.db.load('access_token');

		this.tasksApi.getTasks(null, 'ACTIVE').subscribe(
			(response) => {
				this.userTasks = response.data;
				this.form = new FormComponent(
					this.route,
					this.router,
					this.requestApi,
					this.tasksApi,
					this.db
				);
			},
			(error) => {
				console.log(error);
			}
		);
	}
	openForm(processRequestId, taskId) {
		this.router.navigate([
			'form',
			{
				processRequestId: processRequestId,
				taskId: taskId,
			},
		]);
	}
	getUserTask(id) {}
	getUserTasks(id) {}
}
