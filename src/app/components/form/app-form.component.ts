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
	@Input() css: any;
	@Input() computed: any;
	calcPropsValues: any = {};
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
		this.calcPropsValues = this.executeJavascripts(this.computed);
		this.processRequestId =
			Number(this.route.snapshot.paramMap.get('processRequestId')) || null;
		this.taskId = Number(this.route.snapshot.paramMap.get('taskId')) || null;
		const styleEl = document.createElement('style');
		styleEl.innerHTML = this.css;
		document.head.appendChild(styleEl);
		// add any custom css
		// if (this.css.length > 0) {
		// 	const sanitizedCSS = this.sanitizeCSS(this.css);
		// 	if (sanitizedCSS) {
		// 		// Inject CSS into the page
		// 		const styleEl = document.createElement('style');
		// 		styleEl.innerHTML = sanitizedCSS;
		// 		document.head.appendChild(styleEl);
		// 	} else {
		// 		console.warn('CSS was sanitized out, nothing was injected.');
		// 	}
		// }
	}

	executeJavascripts(computed: any[]): { [key: string]: any } {
		const result: { [key: string]: any } = {};

		computed.forEach((computed) => {
			if (computed.type === 'javascript') {
				try {
					const fn = new Function(computed.formula);
					result[computed.property] = fn();
				} catch (e) {
					console.error(e);
				}
			}
		});
		return result;
	}
	/**
	 * Given a raw CSS string, sanitize it by stripping out
	 * non-conforming characters and properties.
	 *
	 * This approach uses a whitelist methodology, allowing only
	 * specific properties, values, and characters.
	 *
	 * @param {string} css Raw CSS string
	 * @returns {string} Sanitized CSS string
	 */
	sanitizeCSS(css: string) {
		// 1. Strip out any comments
		let cleanedCSS = css.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '');

		// 2. Split by braces to extract selectors and properties
		const chunks = cleanedCSS.split('}');
		cleanedCSS = chunks
			.map((chunk) => {
				const [selector, properties] = chunk.split('{');

				// 2.1. Sanitize the selector
				const sanitizedSelector = selector
					.replace(/[^\w\s\.,\[\]='-]+/g, '')
					.trim();

				// 2.2. Sanitize the properties
				let sanitizedProperties = '';
				if (properties) {
					const propList = properties.split(';');
					propList.forEach((prop) => {
						const [property, value] = prop.split(':').map((p) => p.trim());
						sanitizedProperties += `${property}: ${value}; `;
					});
				}

				return sanitizedSelector
					? `${sanitizedSelector} { ${sanitizedProperties}}`
					: '';
			})
			.join(' ');

		return cleanedCSS;
	}
	// Function to handle form submission
	submitForm() {
		// Load access token from the database
		const accessToken = this.db.load('access_token') as string | undefined;
		// If access token exists, set it in the task API configuration
		if (accessToken)
			this.requestApi.configuration.credentials['pm_api_bearer'] = accessToken;
		let payLoad = {
			data: this.request,
			status: 'COMPLETED',
		};
		// Call getTasks method from tasksApi with parameters null and 'ACTIVE'
		this.tasksApi.updateTask(Number(this.taskId), payLoad).subscribe(
			(response: any) => {
				// Handle successful response
				console.log(response); // Log the response to the console
				this.router.navigate(['tasks']);
			},
			(error) => {
				// Handle error response
				console.log(error); // Log the error to the console
			}
		);
		//console.log(this);
	}
}
interface Javascript {
	id: number;
	name: string;
	type: string;
	formula: string;
	property: string;
}
