import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

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
	shadow: any;
	@Input() options: any;
	@Input() calcPropsValues: any;

	constructor(private cdRef: ChangeDetectorRef) {}

	ngAfterViewChecked() {
		this.cdRef.detectChanges();
	}
	isArrayOfArrays(): boolean {
		if (!Array.isArray(this.element.items)) {
			return false;
		}
		for (const item of this.element.items) {
			if (!Array.isArray(item)) {
				return false;
			}
		}
		return true;
	}

	ngOnInit(): void {
		console.log(this.element.items);
		//console.log(this.isArrayOfArrays());
		//this.element.push(this.computedClasses);
		//console.log('computed classes: ', this.computedClasses);
	}
	getColSize(control: any, idx: number): number {
		// Make sure you're getting the options from the correct element
		let colSize = control.config?.options[idx]?.content || 12;
		//console.log('colSize: ', control);
		return colSize; // defaulting to 12 if no config found
	}
}
interface Option {
	value: string;
	content: string;
}
