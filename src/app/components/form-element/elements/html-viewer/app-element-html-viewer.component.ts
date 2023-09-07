import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-element-html-viewer',
	templateUrl: './app-element-html-viewer.component.html',
})
export class AppElementHtmlViewerComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() formElement: any;
	@Input() control: any;
	@Input() data: any;
	@Input() calcPropsValues: any;
	constructor() {}

	ngOnInit(): void {
		try {
			this.element.config.calculatedContent = this.injectContent(
				this.element.config.content,
				this.calcPropsValues
			);
		} catch (e) {
			console.error(e);
		}
		//console.log(this);
	}
	injectContent(htmlString: string, dynamicData: any): string {
		return htmlString.replace(/\{\{(\w+)\}\}/g, (match, key) => {
			// Return the dynamic data if the key exists, else return the original match
			return dynamicData.hasOwnProperty(key) ? dynamicData[key] : match;
		});
	}
}
interface Option {
	value: string;
	content: string;
}
