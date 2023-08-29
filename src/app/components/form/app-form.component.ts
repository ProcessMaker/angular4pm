import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService, ProcessRequestsService } from 'api';
import { DbService } from 'src/app/services/db.service';

@Component({
	selector: 'app-form',
	templateUrl: './app-form.component.html',
})
export class FormComponent implements OnInit {
	// Define the request object, type can be further specified
	@Input() request: any;
	// Define properties with appropriate types
	exists: any; // Define the type as per your requirements
	processRequestId: number | null = null; // Define the type as number or null
	taskId: number | null = null; // Define the type as number or null
	@Input() screens: any; // Define the type as per your requirements
	@Input() data: any; // Define the type as per your requirements
	@Input() response: any; // Define the type as per your requirements
	@Input() element: any; // Define the type as per your requirements
	isMultiColumn: boolean = false;
	@Input() cols: any;
	@Input() form: any;

	// Constructor with necessary dependencies
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public requestApi: ProcessRequestsService,
		public tasksApi: TasksService,
		private db: DbService
	) {}

	ngOnInit() {
		// console.log(this);

		this.processRequestId =
			Number(this.route.snapshot.paramMap.get('processRequestId')) || null;
		this.taskId = Number(this.route.snapshot.paramMap.get('taskId')) || null;
	}

	// Function to handle form submission
	submitForm() {
		// Load access token from the database
		const accessToken = this.db.load('access_token') as string | undefined;
		// If access token exists, set it in the task API configuration
		if (accessToken)
			this.requestApi.configuration.credentials['pm_api_bearer'] = accessToken;
		console.log(this);
		let payLoad = {
			data: this.request,
		};
		// Call getTasks method from tasksApi with parameters null and 'ACTIVE'
		this.requestApi
			.updateProcessRequest(this.request._request.id, payLoad)
			.subscribe(
				(response: any) => {
					// Handle successful response
					let result = response.data; // Assign user tasks from response data

					// Create a new ScreenComponent instance
					console.log(result);
				},
				(error) => {
					// Handle error response
					console.log(error); // Log the error to the console
				}
			);
		//console.log(this);
	}
}
