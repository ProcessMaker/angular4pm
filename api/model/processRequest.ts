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
import { ProcessRequestEditable } from './processRequestEditable';
import { ProcessRequestAllOf } from './processRequestAllOf';
import { Users } from './users';


/**
 * Represents an Eloquent model of a Request which is an instance of a Process.
 */
export interface ProcessRequest { 
    id?: string;
    process_id?: number;
    process_collaboration_id?: string;
    participant_id?: string;
    process_category_id?: string;
    created_at?: string;
    updated_at?: string;
    user?: any | null;
    participants?: Array<Users>;
    user_id?: string;
    callable_id?: string;
    data?: object;
    status?: ProcessRequest.StatusEnum;
    name?: string;
    process?: object;
}
export namespace ProcessRequest {
    export type StatusEnum = 'ACTIVE' | 'COMPLETED' | 'ERROR' | 'CANCELED';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Completed: 'COMPLETED' as StatusEnum,
        Error: 'ERROR' as StatusEnum,
        Canceled: 'CANCELED' as StatusEnum
    };
}


