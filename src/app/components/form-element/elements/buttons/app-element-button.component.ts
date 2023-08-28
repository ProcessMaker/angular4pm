import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-element-button',
	templateUrl: './app-element-button.component.html',
})
export class ButtonComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() formElement: any;
	@Input() control: any;
	constructor() {}

	ngOnInit(): void {
		console.log(this);
	}
}
interface Option {
	value: string;
	content: string;
}
