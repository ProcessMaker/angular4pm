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


export interface ScreenCategoryEditable { 
    name?: string;
    status?: ScreenCategoryEditable.StatusEnum;
}
export namespace ScreenCategoryEditable {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE';
    export const StatusEnum = {
        Active: 'ACTIVE' as StatusEnum,
        Inactive: 'INACTIVE' as StatusEnum
    };
}


