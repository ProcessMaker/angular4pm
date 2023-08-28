import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService, ProcessRequestsService } from 'api';
import { DbService } from 'src/app/services/db.service';

@Component({
	selector: 'app-screen',
	templateUrl: './app-screen.component.html',
})
export class ScreenComponent implements OnInit {
	// Define the request object, type can be further specified
	request: any;

	// Define properties with appropriate types
	exists: any; // Define the type as per your requirements
	processRequestId: number | null = null; // Define the type as number or null
	taskId: number | null = null; // Define the type as number or null
	@Output() screens: any; // Define the type as per your requirements
	data: any; // Define the type as per your requirements
	response: any; // Define the type as per your requirements
	screenConfig: any;

	@Output() screenEvent: EventEmitter<any> = new EventEmitter(); // Define the type as per your requirements

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public requestApi: ProcessRequestsService,
		public tasksApi: TasksService,
		private db: DbService
	) {}

	ngOnInit(): void {
		// Parse the values as numbers, and handle the possibility of null values
		// Convert processRequestId and taskId from string to number, handle null values
		this.processRequestId =
			Number(this.route.snapshot.paramMap.get('processRequestId')) || null;
		this.taskId = Number(this.route.snapshot.paramMap.get('taskId')) || null;

		// Check if taskId is not null before proceeding
		if (this.taskId !== null) {
			// Set the credentials for the tasks API
			this.tasksApi.configuration.credentials['pm_api_bearer'] =
				this.db.load('access_token') || '';

			// Fetch the task by ID and include specific related data
			this.tasksApi
				.getTasksById(
					this.taskId,
					'processRequest,user,data,screen,definition,screenRef'
				)
				.subscribe(
					(response) => {
						// Assign the response to the request object
						this.screens = response.screen;
						this.request = response.data;
						console.log(this);
					},
					(error) => {
						// Log any errors
					}
				);
		}
	}

	handleScreenEvent(event: any) {
		// Handle any screen-related event here
		this.screenEvent.emit(event);
	}
}
