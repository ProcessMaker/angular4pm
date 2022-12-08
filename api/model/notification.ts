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
import { NotificationAllOf } from './notificationAllOf';
import { NotificationEditable } from './notificationEditable';


/**
 * Represents a notification definition.
 */
export interface Notification { 
    id?: string;
    read_at?: string;
    created_at?: string;
    updated_at?: string;
    type?: string;
    notifiable_type?: string;
    notifiable_id?: number;
    data?: string;
    name?: string;
    message?: string;
    processName?: string;
    userName?: string;
    request_id?: string;
}
