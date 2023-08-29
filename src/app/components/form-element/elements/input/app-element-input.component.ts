import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-element-input',
	templateUrl: './app-element-input.component.html',
})
export class InputComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() formElement: any;
	@Input() control: any;
	@Input() data: any;
	constructor() {}

	ngOnInit(): void {
		//console.log(this);
	}
}
interface Option {
	value: string;
	content: string;
}
