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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { InlineObject13 } from '../model/models';
import { InlineResponse20029 } from '../model/models';
import { InlineResponse404 } from '../model/models';
import { InlineResponse422 } from '../model/models';
import { ProcessRequestToken } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

    protected basePath = 'https://demojc-se.processmaker.net/api/1.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Returns all tasks that the user has access to
     * Display a listing of the resource.
     * @param processRequestId Process request id
     * @param filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param orderBy Field to order results by
     * @param orderDirection 
     * @param include Include data from related models in payload. Comma separated list.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTasks(processRequestId?: number, filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', include?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<InlineResponse20029>;
    public getTasks(processRequestId?: number, filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', include?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<InlineResponse20029>>;
    public getTasks(processRequestId?: number, filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', include?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<InlineResponse20029>>;
    public getTasks(processRequestId?: number, filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', include?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (processRequestId !== undefined && processRequestId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>processRequestId, 'process_request_id');
        }
        if (filter !== undefined && filter !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>filter, 'filter');
        }
        if (orderBy !== undefined && orderBy !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>orderBy, 'order_by');
        }
        if (orderDirection !== undefined && orderDirection !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>orderDirection, 'order_direction');
        }
        if (include !== undefined && include !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>include, 'include');
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

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        //return this.httpClient.get<InlineResponse20029>(`${this.configuration.basePath}/tasks`,
        return this.httpClient.get<InlineResponse20029>(`${this.configuration.basePath}/tasks/?page=1&include=process,processRequest,processRequest.user,user,data&pmql=(user_id=1)%20AND%20(status%20%3D%20%22In%20Progress%22)&per_page=10&order_by=ID&order_direction=DESC&non_system=true`,
            {
                params: queryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a single task by ID
     * Display the specified resource.
     * @param taskId task id
     * @param include include
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTasksById(taskId: number, include?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ProcessRequestToken>;
    public getTasksById(taskId: number, include?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ProcessRequestToken>>;
    public getTasksById(taskId: number, include?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ProcessRequestToken>>;
    public getTasksById(taskId: number, include?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getTasksById.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (include !== undefined && include !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>include, 'include');
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

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<ProcessRequestToken>(`${this.configuration.basePath}/tasks/${encodeURIComponent(String(taskId))}`,
            {
                params: queryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a task
     * Updates the current element
     * @param taskId ID of task to update
     * @param inlineObject13 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTask(taskId: number, inlineObject13: InlineObject13, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ProcessRequestToken>;
    public updateTask(taskId: number, inlineObject13: InlineObject13, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ProcessRequestToken>>;
    public updateTask(taskId: number, inlineObject13: InlineObject13, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ProcessRequestToken>>;
    public updateTask(taskId: number, inlineObject13: InlineObject13, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling updateTask.');
        }
        if (inlineObject13 === null || inlineObject13 === undefined) {
            throw new Error('Required parameter inlineObject13 was null or undefined when calling updateTask.');
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

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.put<ProcessRequestToken>(`${this.configuration.basePath}/tasks/${encodeURIComponent(String(taskId))}`,
            inlineObject13,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
