import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-multi-column',
	templateUrl: './app-multi-column.component.html',
})
export class MultiColumnComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() control: any;
	@Input() cols: any;
	columnSize: any;

	constructor() {}

	ngOnInit(): void {
		// console.log(this.element);
		//console.log(this);
		if (this.element && this.element.config && this.element.config.options) {
			this.computedClasses = this.element.config.options.map(
				(option: Option) => {
					this.columnSize = Number(option.content);
					//console.log('columnSize: ', columnSize);
					return 'form-group col-md-' + this.columnSize;
				}
			);
			//console.log('computed classes: ', this.computedClasses);
		}
	}
	checkSupportedComponents(component: any): any {
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
interface Option {
	value: string;
	content: string;
}
