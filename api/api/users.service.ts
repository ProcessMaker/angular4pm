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

import { InlineResponse2004 } from '../model/models';
import { InlineResponse404 } from '../model/models';
import { InlineResponse422 } from '../model/models';
import { RestoreUser } from '../model/models';
import { UpdateUserGroups } from '../model/models';
import { Users } from '../model/models';
import { UsersEditable } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

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
     * Save a new users
     * Store a newly created resource in storage.
     * @param usersEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUser(usersEditable: UsersEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Users>;
    public createUser(usersEditable: UsersEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Users>>;
    public createUser(usersEditable: UsersEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Users>>;
    public createUser(usersEditable: UsersEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (usersEditable === null || usersEditable === undefined) {
            throw new Error('Required parameter usersEditable was null or undefined when calling createUser.');
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

        return this.httpClient.post<Users>(`${this.configuration.basePath}/users`,
            usersEditable,
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
     * Delete a user
     * Delete a user
     * @param userId ID of user to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUser(userId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public deleteUser(userId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public deleteUser(userId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public deleteUser(userId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteUser.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/users/${encodeURIComponent(String(userId))}`,
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
     * Get single user by ID
     * Display the specified resource.
     * @param userId ID of user to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserById(userId: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<Users>;
    public getUserById(userId: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<Users>>;
    public getUserById(userId: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<Users>>;
    public getUserById(userId: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserById.');
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

        return this.httpClient.get<Users>(`${this.configuration.basePath}/users/${encodeURIComponent(String(userId))}`,
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
     * Returns all users
     * Display a listing of the resource.
     * @param status ACTIVE or INACTIVE
     * @param filter Filter results by string. Searches First Name, Last Name, Email and Username.
     * @param orderBy Field to order results by
     * @param orderDirection 
     * @param perPage 
     * @param include Include data from related models in payload. Comma separated list.
     * @param excludeIds Comma separated list of IDs to exclude from the response
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsers(status?: 'ACTIVE' | 'INACTIVE', filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, excludeIds?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<InlineResponse2004>;
    public getUsers(status?: 'ACTIVE' | 'INACTIVE', filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, excludeIds?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<InlineResponse2004>>;
    public getUsers(status?: 'ACTIVE' | 'INACTIVE', filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, excludeIds?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<InlineResponse2004>>;
    public getUsers(status?: 'ACTIVE' | 'INACTIVE', filter?: string, orderBy?: string, orderDirection?: 'asc' | 'desc', perPage?: number, include?: string, excludeIds?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (status !== undefined && status !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>status, 'status');
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
        if (perPage !== undefined && perPage !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>perPage, 'per_page');
        }
        if (include !== undefined && include !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>include, 'include');
        }
        if (excludeIds !== undefined && excludeIds !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>excludeIds, 'exclude_ids');
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

        return this.httpClient.get<InlineResponse2004>(`${this.configuration.basePath}/users`,
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
     * Restore a soft deleted user
     * @param restoreUser 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public restoreUser(restoreUser: RestoreUser, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public restoreUser(restoreUser: RestoreUser, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public restoreUser(restoreUser: RestoreUser, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public restoreUser(restoreUser: RestoreUser, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (restoreUser === null || restoreUser === undefined) {
            throw new Error('Required parameter restoreUser was null or undefined when calling restoreUser.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/users/restore`,
            restoreUser,
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
     * Update a user
     * Update a user
     * @param userId ID of user to return
     * @param usersEditable 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUser(userId: number, usersEditable: UsersEditable, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<any>;
    public updateUser(userId: number, usersEditable: UsersEditable, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpResponse<any>>;
    public updateUser(userId: number, usersEditable: UsersEditable, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json'}): Observable<HttpEvent<any>>;
    public updateUser(userId: number, usersEditable: UsersEditable, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUser.');
        }
        if (usersEditable === null || usersEditable === undefined) {
            throw new Error('Required parameter usersEditable was null or undefined when calling updateUser.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/users/${encodeURIComponent(String(userId))}`,
            usersEditable,
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
     * Set the groups a users belongs to
     * @param userId ID of user
     * @param updateUserGroups 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserGroups(userId: number, updateUserGroups: UpdateUserGroups, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public updateUserGroups(userId: number, updateUserGroups: UpdateUserGroups, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public updateUserGroups(userId: number, updateUserGroups: UpdateUserGroups, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public updateUserGroups(userId: number, updateUserGroups: UpdateUserGroups, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserGroups.');
        }
        if (updateUserGroups === null || updateUserGroups === undefined) {
            throw new Error('Required parameter updateUserGroups was null or undefined when calling updateUserGroups.');
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

        return this.httpClient.put<any>(`${this.configuration.basePath}/users/${encodeURIComponent(String(userId))}/groups`,
            updateUserGroups,
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
