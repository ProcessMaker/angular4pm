// Import necessary Angular core modules
import { Component, OnInit } from '@angular/core';
// Import Angular routing modules
import { ActivatedRoute, Router } from '@angular/router';
// Import services related to ProcessRequests and Tasks
import { ProcessRequestsService, TasksService } from 'api';
// Import local database service
import { DbService } from 'src/app/services/db.service';
// Import FormComponent to be used within this component
import { FormComponent } from '../form/form.component';

// Define the Task interface to represent the structure of a task
interface Task {
	process_request_id: string; // ID of the associated process request
	element_name: string; // Name of the element
	advanceStatus: string; // Status of the task advancement
	user: { firstname: string; lastname: string }; // User information
	process_request: { name: string }; // Process request information
	due_at: string; // Due date for the task
	id: string; // Unique ID for the task
}

// Component metadata
@Component({
	selector: 'app-tasks', // Selector used in templates
	templateUrl: './tasks.component.html', // Path to the HTML template
})
// TasksComponent class definition
export class TasksComponent implements OnInit {
	// Pagination properties
	pagination = {
		currentPage: 1, // Current page number
		itemsPerPage: 10, // Number of items per page
		lastPage: null, // Last page number
		totalItems: null, // Total number of items
	};

	// Selected request and task properties
	selectedRequest: Request | null = null;
	selectedTask: Task | null = null;
	userTasks: Task[] = []; // Array to hold user tasks
	color = 'green'; // Color property (usage not shown in provided code)
	form: FormComponent | null = null; // FormComponent instance

	// Constructor with dependency injection
	constructor(
		private requestApi: ProcessRequestsService, // Process request service
		private tasksApi: TasksService, // Task service
		private route: ActivatedRoute, // Activated route information
		private router: Router, // Router service for navigation
		private db: DbService // Database service
	) {}

	// ngOnInit lifecycle hook
	ngOnInit() {
		// Load access token from the database
		const accessToken = this.db.load('access_token') as string | undefined;
		// If access token exists, set it in the task API configuration
		if (accessToken) {
			this.tasksApi.configuration.credentials['pm_api_bearer'] = accessToken;
		}

		// Call getTasks method from tasksApi with parameters null and 'ACTIVE'
		this.tasksApi.getTasks(undefined, 'ACTIVE').subscribe(
			(response: any) => {
				// Handle successful response
				this.userTasks = response.data; // Assign user tasks from response data
				// Create a new FormComponent instance
				this.form = new FormComponent(
					this.route,
					this.router,
					this.requestApi,
					this.tasksApi,
					this.db
				);
			},
			(error) => {
				// Handle error response
				console.log(error); // Log the error to the console
			}
		);
	}

	// Method to open a form with given processRequestId and taskId
	openForm(processRequestId: string, taskId: string) {
		// Navigate to the 'form' route with parameters
		this.router.navigate([
			'form',
			{
				processRequestId: processRequestId,
				taskId: taskId,
			},
		]);
	}

	// Placeholder method for getting a user task by ID
	getUserTask(id: string) {}

	// Placeholder method for getting user tasks by ID
	getUserTasks(id: string) {}
}
