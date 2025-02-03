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
/**
 * 
 * @export
 * @interface DatapointExport
 */
export interface DatapointExport {
    /**
     * 
     * @type {number}
     * @memberof DatapointExport
     */
    memberNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    displayName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    isCompany?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    companyName?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    usageName?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    pronouns?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    birthdate?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    street2?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    preferredLanguage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    isInvesting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    ratenzahlung?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    attendedWelcomeSession?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    coPurchaser?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    allowsPurchaseTracking?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatapointExport
     */
    shiftCapabilities?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DatapointExport
     */
    shiftPartner?: number;
    /**
     * 
     * @type {string}
     * @memberof DatapointExport
     */
    shiftStatus?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    isWorking?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    isExempted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    isPaused?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatapointExport
     */
    canShop?: boolean;
}

/**
 * Check if a given object implements the DatapointExport interface.
 */
export function instanceOfDatapointExport(value: object): value is DatapointExport {
    return true;
}

export function DatapointExportFromJSON(json: any): DatapointExport {
    return DatapointExportFromJSONTyped(json, false);
}

export function DatapointExportFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatapointExport {
    if (json == null) {
        return json;
    }
    return {
        
        'memberNumber': json['member_number'] == null ? undefined : json['member_number'],
        'displayName': json['display_name'] == null ? undefined : json['display_name'],
        'isCompany': json['is_company'] == null ? undefined : json['is_company'],
        'companyName': json['company_name'] == null ? undefined : json['company_name'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'usageName': json['usage_name'] == null ? undefined : json['usage_name'],
        'pronouns': json['pronouns'] == null ? undefined : json['pronouns'],
        'email': json['email'] == null ? undefined : json['email'],
        'phoneNumber': json['phone_number'] == null ? undefined : json['phone_number'],
        'birthdate': json['birthdate'] == null ? undefined : json['birthdate'],
        'street': json['street'] == null ? undefined : json['street'],
        'street2': json['street_2'] == null ? undefined : json['street_2'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'preferredLanguage': json['preferred_language'] == null ? undefined : json['preferred_language'],
        'isInvesting': json['is_investing'] == null ? undefined : json['is_investing'],
        'ratenzahlung': json['ratenzahlung'] == null ? undefined : json['ratenzahlung'],
        'attendedWelcomeSession': json['attended_welcome_session'] == null ? undefined : json['attended_welcome_session'],
        'coPurchaser': json['co_purchaser'] == null ? undefined : json['co_purchaser'],
        'allowsPurchaseTracking': json['allows_purchase_tracking'] == null ? undefined : json['allows_purchase_tracking'],
        'shiftCapabilities': json['shift_capabilities'] == null ? undefined : json['shift_capabilities'],
        'shiftPartner': json['shift_partner'] == null ? undefined : json['shift_partner'],
        'shiftStatus': json['shift_status'] == null ? undefined : json['shift_status'],
        'isWorking': json['is_working'] == null ? undefined : json['is_working'],
        'isExempted': json['is_exempted'] == null ? undefined : json['is_exempted'],
        'isPaused': json['is_paused'] == null ? undefined : json['is_paused'],
        'canShop': json['can_shop'] == null ? undefined : json['can_shop'],
    };
}

  export function DatapointExportToJSON(json: any): DatapointExport {
      return DatapointExportToJSONTyped(json, false);
  }

  export function DatapointExportToJSONTyped(value?: DatapointExport | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'member_number': value['memberNumber'],
        'display_name': value['displayName'],
        'is_company': value['isCompany'],
        'company_name': value['companyName'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'usage_name': value['usageName'],
        'pronouns': value['pronouns'],
        'email': value['email'],
        'phone_number': value['phoneNumber'],
        'birthdate': value['birthdate'],
        'street': value['street'],
        'street_2': value['street2'],
        'postcode': value['postcode'],
        'city': value['city'],
        'country': value['country'],
        'preferred_language': value['preferredLanguage'],
        'is_investing': value['isInvesting'],
        'ratenzahlung': value['ratenzahlung'],
        'attended_welcome_session': value['attendedWelcomeSession'],
        'co_purchaser': value['coPurchaser'],
        'allows_purchase_tracking': value['allowsPurchaseTracking'],
        'shift_capabilities': value['shiftCapabilities'],
        'shift_partner': value['shiftPartner'],
        'shift_status': value['shiftStatus'],
        'is_working': value['isWorking'],
        'is_exempted': value['isExempted'],
        'is_paused': value['isPaused'],
        'can_shop': value['canShop'],
    };
}

