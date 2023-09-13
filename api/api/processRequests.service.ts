/**
 * ProcessMaker API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@processmaker.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpResponse,
	HttpEvent,
	HttpParameterCodec,
} from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { InlineResponse20013 } from '../model/models';
import { InlineResponse404 } from '../model/models';
import { ProcessRequest } from '../model/models';
import { ProcessRequestEditable } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ProcessRequestsService {
	protected basePath =
		environment.apiProtocol + environment.apiDomain + environment.apiPath;
	public defaultHeaders = new HttpHeaders();
	public configuration = new Configuration();
	public encoder: HttpParameterCodec;

	constructor(
		protected httpClient: HttpClient,
		@Optional() @Inject(BASE_PATH) basePath: string,
		@Optional() configuration: Configuration
	) {
		if (configuration) {
			this.configuration = configuration;
		}
		if (typeof this.configuration.basePath !== 'string') {
			if (typeof basePath !== 'string') {
				basePath = this.basePath;
			}
			this.configuration.basePath = basePath;
		}
		this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
	}

	private addToHttpParams(
		httpParams: HttpParams,
		value: any,
		key?: string
	): HttpParams {
		if (typeof value === 'object' && value instanceof Date === false) {
			httpParams = this.addToHttpParamsRecursive(httpParams, value);
		} else {
			httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
		}
		return httpParams;
	}

	private addToHttpParamsRecursive(
		httpParams: HttpParams,
		value?: any,
		key?: string
	): HttpParams {
		if (value == null) {
			return httpParams;
		}

		if (typeof value === 'object') {
			if (Array.isArray(value)) {
				(value as any[]).forEach(
					(elem) =>
						(httpParams = this.addToHttpParamsRecursive(httpParams, elem, key))
				);
			} else if (value instanceof Date) {
				if (key != null) {
					httpParams = httpParams.append(
						key,
						(value as Date).toISOString().substr(0, 10)
					);
				} else {
					throw Error('key may not be null if value is Date');
				}
			} else {
				Object.keys(value).forEach(
					(k) =>
						(httpParams = this.addToHttpParamsRecursive(
							httpParams,
							value[k],
							key != null ? `${key}.${k}` : k
						))
				);
			}
		} else if (key != null) {
			httpParams = httpParams.append(key, value);
		} else {
			throw Error('key may not be null if value is not object or array');
		}
		return httpParams;
	}

	/**
	 * Delete a process request
	 * Delete a request
	 * @param processRequestId ID of process request to return
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public deleteProcessRequest(
		processRequestId: number,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<ProcessRequest>;
	public deleteProcessRequest(
		processRequestId: number,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<ProcessRequest>>;
	public deleteProcessRequest(
		processRequestId: number,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<ProcessRequest>>;
	public deleteProcessRequest(
		processRequestId: number,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (processRequestId === null || processRequestId === undefined) {
			throw new Error(
				'Required parameter processRequestId was null or undefined when calling deleteProcessRequest.'
			);
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (pm_api_auth_code) required
		credential = this.configuration.lookupCredential('pm_api_auth_code');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_bearer) required
		credential = this.configuration.lookupCredential('pm_api_bearer');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_key) required
		credential = this.configuration.lookupCredential('pm_api_key');
		if (credential) {
			headers = headers.set('Authorization', credential);
		}

		let httpHeaderAcceptSelected: string | undefined =
			options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected =
				this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (
			httpHeaderAcceptSelected &&
			httpHeaderAcceptSelected.startsWith('text')
		) {
			responseType_ = 'text';
		}

		return this.httpClient.delete<ProcessRequest>(
			`${this.configuration.basePath}/requests/${encodeURIComponent(
				String(processRequestId)
			)}`,
			{
				responseType: <any>responseType_,
				withCredentials: this.configuration.withCredentials,
				headers: headers,
				observe: observe,
				reportProgress: reportProgress,
			}
		);
	}

	/**
	 * Get single process request by ID
	 * Display the specified resource.
	 * @param processRequestId ID of process request to return
	 * @param include Include data from related models in payload. Comma separated list.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public getProcessRequestById(
		processRequestId: number,
		include?: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<ProcessRequest>;
	public getProcessRequestById(
		processRequestId: number,
		include?: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<ProcessRequest>>;
	public getProcessRequestById(
		processRequestId: number,
		include?: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<ProcessRequest>>;
	public getProcessRequestById(
		processRequestId: number,
		include?: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (processRequestId === null || processRequestId === undefined) {
			throw new Error(
				'Required parameter processRequestId was null or undefined when calling getProcessRequestById.'
			);
		}

		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (include !== undefined && include !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>include,
				'include'
			);
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (pm_api_auth_code) required
		credential = this.configuration.lookupCredential('pm_api_auth_code');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_bearer) required
		credential = this.configuration.lookupCredential('pm_api_bearer');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_key) required
		credential = this.configuration.lookupCredential('pm_api_key');
		if (credential) {
			headers = headers.set('Authorization', credential);
		}

		let httpHeaderAcceptSelected: string | undefined =
			options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected =
				this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (
			httpHeaderAcceptSelected &&
			httpHeaderAcceptSelected.startsWith('text')
		) {
			responseType_ = 'text';
		}

		return this.httpClient.get<ProcessRequest>(
			`${this.configuration.basePath}/requests/${encodeURIComponent(
				String(processRequestId)
			)}`,
			{
				params: queryParameters,
				responseType: <any>responseType_,
				withCredentials: this.configuration.withCredentials,
				headers: headers,
				observe: observe,
				reportProgress: reportProgress,
			}
		);
	}

	/**
	 * Returns all process Requests that the user has access to
	 * Display a listing of the resource.
	 * @param type Only return requests by type (all|in_progress|completed)
	 * @param filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
	 * @param orderBy Field to order results by
	 * @param orderDirection
	 * @param perPage
	 * @param include Include data from related models in payload. Comma separated list.
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public getProcessesRequests(
		type?: 'all' | 'in_progress' | 'completed' | 'started_me',
		filter?: string,
		orderBy?: string,
		orderDirection?: 'asc' | 'desc',
		perPage?: number,
		include?: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<InlineResponse20013>;
	public getProcessesRequests(
		type?: 'all' | 'in_progress' | 'completed' | 'started_me',
		filter?: string,
		orderBy?: string,
		orderDirection?: 'asc' | 'desc',
		perPage?: number,
		include?: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<InlineResponse20013>>;
	public getProcessesRequests(
		type?: 'all' | 'in_progress' | 'completed' | 'started_me',
		filter?: string,
		orderBy?: string,
		orderDirection?: 'asc' | 'desc',
		perPage?: number,
		include?: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<InlineResponse20013>>;
	public getProcessesRequests(
		type?: 'all' | 'in_progress' | 'completed' | 'started_me',
		filter?: string,
		orderBy?: string,
		orderDirection?: 'asc' | 'desc',
		perPage?: number,
		include?: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		let queryParameters = new HttpParams({ encoder: this.encoder });
		if (type !== undefined && type !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>type,
				'type'
			);
		}
		if (filter !== undefined && filter !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>filter,
				'filter'
			);
		}
		if (orderBy !== undefined && orderBy !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>orderBy,
				'order_by'
			);
		}
		if (orderDirection !== undefined && orderDirection !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>orderDirection,
				'order_direction'
			);
		}
		if (perPage !== undefined && perPage !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>perPage,
				'per_page'
			);
		}
		if (include !== undefined && include !== null) {
			queryParameters = this.addToHttpParams(
				queryParameters,
				<any>include,
				'include'
			);
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (pm_api_auth_code) required
		credential = this.configuration.lookupCredential('pm_api_auth_code');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_bearer) required
		credential = this.configuration.lookupCredential('pm_api_bearer');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_key) required
		credential = this.configuration.lookupCredential('pm_api_key');
		if (credential) {
			headers = headers.set('Authorization', credential);
		}

		let httpHeaderAcceptSelected: string | undefined =
			options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected =
				this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (
			httpHeaderAcceptSelected &&
			httpHeaderAcceptSelected.startsWith('text')
		) {
			responseType_ = 'text';
		}

		return this.httpClient.get<InlineResponse20013>(
			`${this.configuration.basePath}/requests`,
			{
				params: queryParameters,
				responseType: <any>responseType_,
				withCredentials: this.configuration.withCredentials,
				headers: headers,
				observe: observe,
				reportProgress: reportProgress,
			}
		);
	}

	/**
	 * Update a process request
	 * Update a request
	 * @param processRequestId ID of process request to return
	 * @param processRequestEditable
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public updateProcessRequest(
		processRequestId: number,
		processRequestEditable: ProcessRequestEditable,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any>;
	public updateProcessRequest(
		processRequestId: number,
		processRequestEditable: ProcessRequestEditable,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpResponse<any>>;
	public updateProcessRequest(
		processRequestId: number,
		processRequestEditable: ProcessRequestEditable,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<HttpEvent<any>>;
	public updateProcessRequest(
		processRequestId: number,
		processRequestEditable: ProcessRequestEditable,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: 'application/json' }
	): Observable<any> {
		if (processRequestId === null || processRequestId === undefined) {
			throw new Error(
				'Required parameter processRequestId was null or undefined when calling updateProcessRequest.'
			);
		}
		if (
			processRequestEditable === null ||
			processRequestEditable === undefined
		) {
			throw new Error(
				'Required parameter processRequestEditable was null or undefined when calling updateProcessRequest.'
			);
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (pm_api_auth_code) required
		credential = this.configuration.lookupCredential('pm_api_auth_code');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_bearer) required
		credential = this.configuration.lookupCredential('pm_api_bearer');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_key) required
		credential = this.configuration.lookupCredential('pm_api_key');
		if (credential) {
			headers = headers.set('Authorization', credential);
		}

		let httpHeaderAcceptSelected: string | undefined =
			options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = ['application/json'];
			httpHeaderAcceptSelected =
				this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		// to determine the Content-Type header
		const consumes: string[] = ['application/json'];
		const httpContentTypeSelected: string | undefined =
			this.configuration.selectHeaderContentType(consumes);
		if (httpContentTypeSelected !== undefined) {
			headers = headers.set('Content-Type', httpContentTypeSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (
			httpHeaderAcceptSelected &&
			httpHeaderAcceptSelected.startsWith('text')
		) {
			responseType_ = 'text';
		}

		return this.httpClient.put<any>(
			`${this.configuration.basePath}/requests/${encodeURIComponent(
				String(processRequestId)
			)}`,
			processRequestEditable,
			{
				responseType: <any>responseType_,
				withCredentials: this.configuration.withCredentials,
				headers: headers,
				observe: observe,
				reportProgress: reportProgress,
			}
		);
	}

	/**
	 * Update a process request event
	 * Trigger a intermediate catch event
	 * @param processRequestId ID of process request to return
	 * @param eventId ID of process event to return
	 * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
	 * @param reportProgress flag to report request and response progress.
	 */
	public updateProcessRequestEvent(
		processRequestId: string,
		eventId: string,
		observe?: 'body',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: undefined }
	): Observable<any>;
	public updateProcessRequestEvent(
		processRequestId: string,
		eventId: string,
		observe?: 'response',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: undefined }
	): Observable<HttpResponse<any>>;
	public updateProcessRequestEvent(
		processRequestId: string,
		eventId: string,
		observe?: 'events',
		reportProgress?: boolean,
		options?: { httpHeaderAccept?: undefined }
	): Observable<HttpEvent<any>>;
	public updateProcessRequestEvent(
		processRequestId: string,
		eventId: string,
		observe: any = 'body',
		reportProgress: boolean = false,
		options?: { httpHeaderAccept?: undefined }
	): Observable<any> {
		if (processRequestId === null || processRequestId === undefined) {
			throw new Error(
				'Required parameter processRequestId was null or undefined when calling updateProcessRequestEvent.'
			);
		}
		if (eventId === null || eventId === undefined) {
			throw new Error(
				'Required parameter eventId was null or undefined when calling updateProcessRequestEvent.'
			);
		}

		let headers = this.defaultHeaders;

		let credential: string | undefined;
		// authentication (pm_api_auth_code) required
		credential = this.configuration.lookupCredential('pm_api_auth_code');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_bearer) required
		credential = this.configuration.lookupCredential('pm_api_bearer');
		if (credential) {
			headers = headers.set('Authorization', 'Bearer ' + credential);
		}

		// authentication (pm_api_key) required
		credential = this.configuration.lookupCredential('pm_api_key');
		if (credential) {
			headers = headers.set('Authorization', credential);
		}

		let httpHeaderAcceptSelected: string | undefined =
			options && options.httpHeaderAccept;
		if (httpHeaderAcceptSelected === undefined) {
			// to determine the Accept header
			const httpHeaderAccepts: string[] = [];
			httpHeaderAcceptSelected =
				this.configuration.selectHeaderAccept(httpHeaderAccepts);
		}
		if (httpHeaderAcceptSelected !== undefined) {
			headers = headers.set('Accept', httpHeaderAcceptSelected);
		}

		let responseType_: 'text' | 'json' = 'json';
		if (
			httpHeaderAcceptSelected &&
			httpHeaderAcceptSelected.startsWith('text')
		) {
			responseType_ = 'text';
		}

		return this.httpClient.post<any>(
			`${this.configuration.basePath}/requests/${encodeURIComponent(
				String(processRequestId)
			)}/events/${encodeURIComponent(String(eventId))}`,
			null,
			{
				responseType: <any>responseType_,
				withCredentials: this.configuration.withCredentials,
				headers: headers,
				observe: observe,
				reportProgress: reportProgress,
			}
		);
	}
}
