import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-element-image',
	templateUrl: './app-element-image.component.html',
})
export class AppElementImageComponent implements OnInit {
	computedClasses: any;
	@Input() request: any;
	@Input() element: any;
	@Input() formElement: any;
	@Input() control: any;
	@Input() data: any;
	@Input() calcPropsValues: any;
	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		//console.log(this);
	}
	safeUrl(url: string): SafeUrl {
		// Sanitize the URL string
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}
}

interface Option {
	value: string;
	content: string;
}
