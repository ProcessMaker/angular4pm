// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Below is the hard coded Endpoint URL for the PM4 instance we are wanting to connect to.
//Eventually we will create a text box to enter this on the login form
//This is then used in the auth.service.ts - this.httpClient.post(environment.apiUrl

export const environment = {
	production: false,
	apiDomain: 'localhost',
	apiPath: '/api/1.0',
	apiProtocol: 'http://',
	clientId: '19',
	clientSecret: 'Psn9cxcGFKO1GO4ZZ9TgOhQtAjt0Wmzjc58vw8Lq',
	oauthUrl: 'http://localhost/oauth/token',
	redirectUri: 'http://localhost:4200/#/oauth/callback',
	oauthAuthorizeUrl: 'http://localhost/oauth/authorize',
	customCss: false,
	calcProps: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
