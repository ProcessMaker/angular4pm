import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-form-element',
	templateUrl: './form-element.component.html',
})
export class FormElementComponent implements OnInit {
	@Input() data: any; // The form element
	@Input() request: any; // The form element data
	@Input() screen: any; // The screen data
	@Input() response: any; // The response data
	formDefs: any[] = []; // An array to hold all form definitions

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		// Iterate over the config array and process each form definition
		this.screen.config.forEach((formDef: any) => {
			this.formDefs.push(formDef);
		});
		console.log(this.formDefs);
	}
	isHtmlContent(content: string): boolean {
		// Check if the content contains HTML tags  (https://stackoverflow.com/a/15458987)
		return /<\/?[a-z][\s\S]*>/i.test(content);
	}

	safeUrl(url: string): SafeUrl {
		// Sanitize the URL string
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	getMultiColumnClass(item: any, items: any[], screen: any[]): string {
		//console.log(item);
		// console.log(items);
		// console.log(screen);
		return '';
		// console.log(options);
		// console.log(data);

		// Assuming value is the column count, and content is the ratio
		// let totalColumns = 12; // Standard Bootstrap grid
		// let computedClass = 'form-group col-md-';

		// // If the options array contains the desired information
		// if (options && options.length > 0) {
		// 	//let columnCount = Number(options[0].value);
		// 	//let ratio = Number(options[1].content);
		// 	let columnCount = Number(options[0].content);
		// 	// console.log('totalColumns: ' + totalColumns);
		// 	// console.log('columnCount: ' + columnCount);
		// 	//console.log('ratio: ' + options.);

		// 	// Compute the class based on the given ratio and column count
		// 	computedClass += totalColumns / columnCount;
		// } else {
		// 	computedClass += '6'; // Default class if no valid options provided
		// }

		// //console.log('computed class: ' + computedClass);

		// return computedClass;
	}

	checkSupportedComponents(component: any): any {
		//console.log(component);
		// Normalize the component name for supported components
		const supportedComponents = [
			'FormHtmlViewer',
			'FormHtmlEditor',
			'FormInput',
			'FormMultiColumn',
			'FormSelectList',
			'FormTextArea',
			'FormCheckbox',
			'FormButton',
			'FormImage',
		];

		if (supportedComponents.includes(component)) {
			// console.log(
			// 	component === ('FormHtmlEditor' || 'FormHtmlViewer') ? 'FormHtml' : ''
			// );
			// console.log('log for ' + component);
			// if (component === 'FormHtmlEditor' || component === 'FormHtmlViewer') {
			// 	console.log(component);
			// } else {
			// 	console.log('Unsupported');
			// }
			return component === 'FormHtmlEditor' || component === 'FormHtmlViewer'
				? 'FormHtml'
				: component;
		} else {
			return 'Unsupported'; // Return a default value for unsupported components
		}
	}
}
