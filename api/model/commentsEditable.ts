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


export interface CommentsEditable { 
    id?: string;
    user_id?: string;
    commentable_id?: string;
    commentable_type?: string;
    up?: number;
    down?: number;
    subject?: string;
    body?: string;
    hidden?: boolean;
    type?: CommentsEditable.TypeEnum;
}
export namespace CommentsEditable {
    export type TypeEnum = 'LOG' | 'MESSAGE';
    export const TypeEnum = {
        Log: 'LOG' as TypeEnum,
        Message: 'MESSAGE' as TypeEnum
    };
}

