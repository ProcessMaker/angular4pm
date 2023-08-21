import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService, ProcessRequestsService } from 'api';
import { DbService } from 'src/app/services/db.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
	// Define the request object, type can be further specified
	request: any;

	// Define properties with appropriate types
	exists: any; // Define the type as per your requirements
	processRequestId: number | null = null; // Define the type as number or null
	taskId: number | null = null; // Define the type as number or null
	screen: any; // Define the type as per your requirements
	data: any; // Define the type as per your requirements
	response: any; // Define the type as per your requirements

	// Constructor with necessary dependencies
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public requestApi: ProcessRequestsService,
		public tasksApi: TasksService,
		private db: DbService
	) {}

	ngOnInit() {
		//console.log(this);
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
						this.screen = response.screen;
						this.request = response.data;
						this.response = response;
						//console.log(this);
					},
					(error) => {
						// Log any errors
					}
				);
		}
	}

	// Function to handle form submission
	submitForm(data: any) {
		// Define the type of data as per your requirements
		// Create the form data object
		let formData = {
			data: data,
			status: 'COMPLETED',
		};

		// Log the submitted data for debugging
		console.log(data);

		// Check if taskId is not null before proceeding
		if (this.taskId !== null) {
			// Set the credentials for the tasks API
			this.tasksApi.configuration.credentials['pm_api_bearer'] =
				this.db.load('access_token') || '';
			// Update the task with the submitted form data
			this.tasksApi.updateTask(this.taskId, formData).subscribe(
				(response) => {
					// Redirect to the tasks page if the response status is 'CLOSED'
					if (response.status == 'CLOSED') {
						this.router.navigateByUrl('tasks');
					}
				},
				(error) => {
					// Log any errors
					console.log(error);
				}
			);
		}
	}
}
