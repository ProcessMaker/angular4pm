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

import { InlineObject9 } from '../model/models';
import { InlineResponse20017 } from '../model/models';
import { InlineResponse201 } from '../model/models';
import { ScreenExported } from '../model/models';
import { Screens } from '../model/models';
import { ScreensEditable } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ScreensService {

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

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
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
     * Save a new screens
     * Create a new Screen.
     * @param screensEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createScreen(screensEditable: ScreensEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Screens>;
    public createScreen(screensEditable: ScreensEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Screens>>;
    public createScreen(screensEditable: ScreensEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Screens>>;
    public createScreen(screensEditable: ScreensEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (screensEditable === null || screensEditable === undefined) {
            throw new Error('Required parameter screensEditable was null or undefined when calling createScreen.');
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

        return this.httpClient.post<Screens>(`${this.configuration.basePath}/screens`,
            screensEditable,
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
     * Delete a screen
     * Delete a Screen.
     * @param screensId ID of screen to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteScreen(screensId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public deleteScreen(screensId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public deleteScreen(screensId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public deleteScreen(screensId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (screensId === null || screensId === undefined) {
            throw new Error('Required parameter screensId was null or undefined when calling deleteScreen.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/screens/${encodeURIComponent(String(screensId))}`,
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
     * duplicate a screen
     * duplicate a Screen.
     * @param screensId ID of screen to return
     * @param screensEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public duplicateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Screens>;
    public duplicateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Screens>>;
    public duplicateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Screens>>;
    public duplicateScreen(screensId: string, screensEditable: ScreensEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (screensId === null || screensId === undefined) {
            throw new Error('Required parameter screensId was null or undefined when calling duplicateScreen.');
        }
        if (screensEditable === null || screensEditable === undefined) {
            throw new Error('Required parameter screensEditable was null or undefined when calling duplicateScreen.');
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

        return this.httpClient.put<Screens>(`${this.configuration.basePath}/screens/${encodeURIComponent(String(screensId))}/duplicate`,
            screensEditable,
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
     * Export a single screen by ID
     * Export the specified screen.
     * @param screensId ID of screen to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportScreen(screensId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<ScreenExported>;
    public exportScreen(screensId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<ScreenExported>>;
    public exportScreen(screensId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<ScreenExported>>;
    public exportScreen(screensId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (screensId === null || screensId === undefined) {
            throw new Error('Required parameter screensId was null or undefined when calling exportScreen.');
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

        return this.httpClient.post<ScreenExported>(`${this.configuration.basePath}/screens/${encodeURIComponent(String(screensId))}/export`,
            null,
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
     * Returns all screens that the user has access to
     * Get a list of Screens.
     * @param filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param orderBy Field to order results by
     * @param orderDirection 
     * @param perPage 
     * @param include Include data from related models in payload. Comma separated list.
     * @param exclude Comma separated list of fields to exclude from the response
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getScreens(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, exclude?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<InlineResponse20017>;
    public getScreens(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, exclude?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<InlineResponse20017>>;
    public getScreens(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, exclude?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<InlineResponse20017>>;
    public getScreens(filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, exclude?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

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
        if (exclude !== undefined && exclude !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>exclude, 'exclude');
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

        return this.httpClient.get<InlineResponse20017>(`${this.configuration.basePath}/screens`,
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
     * Get single screens by ID
     * Get a single Screen.
     * @param screensId ID of screens to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getScreensById(screensId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Screens>;
    public getScreensById(screensId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Screens>>;
    public getScreensById(screensId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Screens>>;
    public getScreensById(screensId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (screensId === null || screensId === undefined) {
            throw new Error('Required parameter screensId was null or undefined when calling getScreensById.');
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

        return this.httpClient.get<Screens>(`${this.configuration.basePath}/screens/${encodeURIComponent(String(screensId))}`,
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
     * Import a new screen
     * Import the specified screen.
     * @param file file to import
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public importScreen(file?: Blob, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<InlineResponse201>;
    public importScreen(file?: Blob, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<InlineResponse201>>;
    public importScreen(file?: Blob, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<InlineResponse201>>;
    public importScreen(file?: Blob, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: this.encoder});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) as any || formParams;
        }

        let responseType_: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<InlineResponse201>(`${this.configuration.basePath}/screens/import`,
            convertFormParamsToString ? formParams.toString() : formParams,
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
     * Preview a screen
     * Get preview a screen
     * @param inlineObject9 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public preview(inlineObject9: InlineObject9, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Screens>;
    public preview(inlineObject9: InlineObject9, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Screens>>;
    public preview(inlineObject9: InlineObject9, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Screens>>;
    public preview(inlineObject9: InlineObject9, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (inlineObject9 === null || inlineObject9 === undefined) {
            throw new Error('Required parameter inlineObject9 was null or undefined when calling preview.');
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

        return this.httpClient.post<Screens>(`${this.configuration.basePath}/screens/preview`,
            inlineObject9,
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
     * Update a screen
     * Update a Screen.
     * @param screensId ID of screen to return
     * @param screensEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public updateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public updateScreen(screensId: string, screensEditable: ScreensEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public updateScreen(screensId: string, screensEditable: ScreensEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (screensId === null || screensId === undefined) {
            throw new Error('Required parameter screensId was null or undefined when calling updateScreen.');
        }
        if (screensEditable === null || screensEditable === undefined) {
            throw new Error('Required parameter screensEditable was null or undefined when calling updateScreen.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/screens/${encodeURIComponent(String(screensId))}`,
            screensEditable,
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
