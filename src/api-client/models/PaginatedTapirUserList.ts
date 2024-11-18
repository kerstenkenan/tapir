/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { TapirUser } from './TapirUser';
import {
    TapirUserFromJSON,
    TapirUserFromJSONTyped,
    TapirUserToJSON,
    TapirUserToJSONTyped,
} from './TapirUser';

/**
 * 
 * @export
 * @interface PaginatedTapirUserList
 */
export interface PaginatedTapirUserList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedTapirUserList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTapirUserList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTapirUserList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<TapirUser>}
     * @memberof PaginatedTapirUserList
     */
    results: Array<TapirUser>;
}

/**
 * Check if a given object implements the PaginatedTapirUserList interface.
 */
export function instanceOfPaginatedTapirUserList(value: object): value is PaginatedTapirUserList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedTapirUserListFromJSON(json: any): PaginatedTapirUserList {
    return PaginatedTapirUserListFromJSONTyped(json, false);
}

export function PaginatedTapirUserListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedTapirUserList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(TapirUserFromJSON)),
    };
}

  export function PaginatedTapirUserListToJSON(json: any): PaginatedTapirUserList {
      return PaginatedTapirUserListToJSONTyped(json, false);
  }

  export function PaginatedTapirUserListToJSONTyped(value?: PaginatedTapirUserList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(TapirUserToJSON)),
    };
}

