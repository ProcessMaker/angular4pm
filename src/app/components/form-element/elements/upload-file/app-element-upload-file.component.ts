import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-element-upload-file',
	templateUrl: './app-element-upload-file.component.html',
})
export class AppElementUploadFileComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() formElement: any;
	@Input() control: any;
	@Input() data: any;
	@Input() calcPropsValues: any;
	constructor() {}

	ngOnInit(): void {
		//console.log(this);
	}
}
interface Option {
	value: string;
	content: string;
}
