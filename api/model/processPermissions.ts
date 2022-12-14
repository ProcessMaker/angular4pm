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
import { ProcessPermissionsEditable } from './processPermissionsEditable';
import { CommentsAllOf } from './commentsAllOf';


/**
 * Represents a Process permission.
 */
export interface ProcessPermissions { 
    created_at?: string;
    updated_at?: string;
    id?: number;
    process_id?: number;
    permission_id?: number;
    assignable_id?: number;
    assignable_type?: string;
}

