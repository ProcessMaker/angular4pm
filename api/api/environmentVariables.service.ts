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

import { EnvironmentVariable } from '../model/models';
import { EnvironmentVariableEditable } from '../model/models';
import { InlineResponse200 } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class EnvironmentVariablesService {

    protected basePath = 'http://4.2.36.pm.local/api/1.0';
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
     * Create a new environment variable
     * Creates a new global Environment Variable in the system
     * @param environmentVariableEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createEnvironmentVariable(environmentVariableEditable: EnvironmentVariableEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EnvironmentVariable>;
    public createEnvironmentVariable(environmentVariableEditable: EnvironmentVariableEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EnvironmentVariable>>;
    public createEnvironmentVariable(environmentVariableEditable: EnvironmentVariableEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EnvironmentVariable>>;
    public createEnvironmentVariable(environmentVariableEditable: EnvironmentVariableEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (environmentVariableEditable === null || environmentVariableEditable === undefined) {
            throw new Error('Required parameter environmentVariableEditable was null or undefined when calling createEnvironmentVariable.');
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

        return this.httpClient.post<EnvironmentVariable>(`${this.configuration.basePath}/environment_variables`,
            environmentVariableEditable,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete an environment variable
     * @param environmentVariableId ID of environment_variables to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteEnvironmentVariable(environmentVariableId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public deleteEnvironmentVariable(environmentVariableId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public deleteEnvironmentVariable(environmentVariableId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public deleteEnvironmentVariable(environmentVariableId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new Error('Required parameter environmentVariableId was null or undefined when calling deleteEnvironmentVariable.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/environment_variables/${encodeURIComponent(String(environmentVariableId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get an environment variable by id. For security, the value is not included.
     * Return an environment variable instance Using implicit model binding, will automatically return 404 if variable now found
     * @param environmentVariableId ID of environment_variables to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEnvironmentVariableById(environmentVariableId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EnvironmentVariable>;
    public getEnvironmentVariableById(environmentVariableId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EnvironmentVariable>>;
    public getEnvironmentVariableById(environmentVariableId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EnvironmentVariable>>;
    public getEnvironmentVariableById(environmentVariableId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new Error('Required parameter environmentVariableId was null or undefined when calling getEnvironmentVariableById.');
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

        return this.httpClient.get<EnvironmentVariable>(`${this.configuration.basePath}/environment_variables/${encodeURIComponent(String(environmentVariableId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns all environmentVariables that the user has access to. For security, values are not included.
     * Fetch a collection of variables based on paged request and filter if provided
     * @param filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param orderBy Field to order results by
     * @param orderDirection 
     * @param perPage 
     * @param include Include data from related models in payload. Comma separated list.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEnvironmentVariables(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<InlineResponse200>;
    public getEnvironmentVariables(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<InlineResponse200>>;
    public getEnvironmentVariables(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<InlineResponse200>>;
    public getEnvironmentVariables(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
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
        if (perPage !== undefined && perPage !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>perPage, 'per_page');
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

        return this.httpClient.get<InlineResponse200>(`${this.configuration.basePath}/environment_variables`,
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
     * Update an environment variable
     * Update an environment variable
     * @param environmentVariableId ID of environment variables to update
     * @param environmentVariableEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateEnvironmentVariable(environmentVariableId: number, environmentVariableEditable: EnvironmentVariableEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<EnvironmentVariable>;
    public updateEnvironmentVariable(environmentVariableId: number, environmentVariableEditable: EnvironmentVariableEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<EnvironmentVariable>>;
    public updateEnvironmentVariable(environmentVariableId: number, environmentVariableEditable: EnvironmentVariableEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<EnvironmentVariable>>;
    public updateEnvironmentVariable(environmentVariableId: number, environmentVariableEditable: EnvironmentVariableEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (environmentVariableId === null || environmentVariableId === undefined) {
            throw new Error('Required parameter environmentVariableId was null or undefined when calling updateEnvironmentVariable.');
        }
        if (environmentVariableEditable === null || environmentVariableEditable === undefined) {
            throw new Error('Required parameter environmentVariableEditable was null or undefined when calling updateEnvironmentVariable.');
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

        return this.httpClient.put<EnvironmentVariable>(`${this.configuration.basePath}/environment_variables/${encodeURIComponent(String(environmentVariableId))}`,
            environmentVariableEditable,
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
