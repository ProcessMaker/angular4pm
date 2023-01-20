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


export interface ProcessRequestEditable { 
    user_id?: string;
    callable_id?: string;
    data?: object;
    status?: ProcessRequestEditable.StatusEnum;
    name?: string;
    process_id?: number;
    process?: object;
}
export namespace ProcessRequestEditable {
    export type StatusEnum = 'ACTIVE' | 'COMPLETED' | 'ERROR' | 'CANCELED';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Completed: 'COMPLETED' as StatusEnum,
        Error: 'ERROR' as StatusEnum,
        Canceled: 'CANCELED' as StatusEnum
    };
}


