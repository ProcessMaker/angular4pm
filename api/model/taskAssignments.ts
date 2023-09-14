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
import { TaskAssignmentsAllOf } from './taskAssignmentsAllOf';
import { TaskAssignmentsEditable } from './taskAssignmentsEditable';


/**
 * Represents a business process task assignment definition.
 */
export interface TaskAssignments { 
    id?: number;
    created_at?: string;
    updated_at?: string;
    process_id?: number;
    process_task_id?: string;
    assignment_id?: number;
    assignment_type?: TaskAssignments.AssignmentTypeEnum;
}
export namespace TaskAssignments {
    export type AssignmentTypeEnum = 'ProcessMaker\\Models\\User' | 'ProcessMaker\\Models\\Group';
    export const AssignmentTypeEnum = {
        User: 'ProcessMaker\\Models\\User' as AssignmentTypeEnum,
        Group: 'ProcessMaker\\Models\\Group' as AssignmentTypeEnum
    };
}

