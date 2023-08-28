import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-form-element',
	templateUrl: './app-form-element.component.html',
})
export class FormElementComponent implements OnInit {
	@Input() data: any; // The form element
	@Input() request: any; // The form element data
	@Input() screen: any; // The screen data
	@Input() response: any; // The response data
	@Input() element: any; // The response data
	@Input() control: any;
	formDefs: any[] = []; // An array to hold all form definitions
	component: any; // The component to be rendered
	options: any; // The number of columns to be rendered
	@Input() isMultiColumn: boolean = false;
	@Input() cols: any;

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		console.log(this);
		if (this.element.component === 'FormMultiColumn') {
			this.options = this.element.config.options;
		} else if (this.element.component !== 'FormMultiColumn') {
			//console.log(this);
			//this.options = this.control.config.options;
		}

		//this.options = this.element;
	}
	isHtmlContent(content: string): boolean {
		// Check if the content contains HTML tags  (https://stackoverflow.com/a/15458987)
		return /<\/?[a-z][\s\S]*>/i.test(content);
	}

	safeUrl(url: string): SafeUrl {
		// Sanitize the URL string
		return this.sanitizer.bypassSecurityTrustUrl(url);
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
