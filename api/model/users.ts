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
import { UsersAllOf } from './usersAllOf';
import { UsersEditable } from './usersEditable';
import { Media } from './media';


/**
 * The attributes that are mass assignable.
 */
export interface Users { 
    id?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    password?: string;
    address?: string;
    city?: string;
    state?: string;
    postal?: string;
    country?: string;
    phone?: string;
    fax?: string;
    cell?: string;
    title?: string;
    timezone?: string;
    datetime_format?: string;
    language?: string;
    is_administrator?: boolean;
    expires_at?: string;
    loggedin_at?: string;
    remember_token?: string;
    status?: Users.StatusEnum;
    fullname?: string;
    avatar?: string;
    media?: Array<Media>;
    birthdate?: string;
    delegation_user_id?: string;
    manager_id?: string;
    meta?: { [key: string]: object; };
    force_change_password?: boolean;
}
export namespace Users {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE' | 'SCHEDULED' | 'OUT_OF_OFFICE';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Inactive: 'INACTIVE' as StatusEnum,
        Scheduled: 'SCHEDULED' as StatusEnum,
        OutOfOffice: 'OUT_OF_OFFICE' as StatusEnum
    };
}

