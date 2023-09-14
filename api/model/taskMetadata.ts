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
import { TaskMetadataAllOf } from './taskMetadataAllOf';
import { Metadata } from './metadata';


export interface TaskMetadata { 
    filter?: string;
    sort_by?: string;
    sort_order?: TaskMetadata.SortOrderEnum;
    count?: number;
    total_pages?: number;
    current_page?: number;
    form?: number;
    last_page?: number;
    path?: string;
    per_page?: number;
    to?: number;
    total?: number;
    in_overdue?: number;
}
export namespace TaskMetadata {
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}

