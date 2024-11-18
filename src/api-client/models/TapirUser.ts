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
import type { PreferredLanguageEnum } from './PreferredLanguageEnum';
import {
    PreferredLanguageEnumFromJSON,
    PreferredLanguageEnumFromJSONTyped,
    PreferredLanguageEnumToJSON,
    PreferredLanguageEnumToJSONTyped,
} from './PreferredLanguageEnum';

/**
 * 
 * @export
 * @interface TapirUser
 */
export interface TapirUser {
    /**
     * 
     * @type {number}
     * @memberof TapirUser
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    password: string;
    /**
     * 
     * @type {Date}
     * @memberof TapirUser
     */
    lastLogin?: Date | null;
    /**
     * Legt fest, dass der Benutzer alle Berechtigungen hat, ohne diese einzeln zuweisen zu müssen.
     * @type {boolean}
     * @memberof TapirUser
     */
    isSuperuser?: boolean;
    /**
     * Erforderlich. 150 Zeichen oder weniger. Nur Buchstaben, Ziffern und @/./+/-/_.
     * @type {string}
     * @memberof TapirUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    email?: string;
    /**
     * Legt fest, ob sich der Benutzer an der Administrationsseite anmelden kann.
     * @type {boolean}
     * @memberof TapirUser
     */
    isStaff?: boolean;
    /**
     * Legt fest, ob dieser Benutzer aktiv ist. Kann deaktiviert werden, anstatt Benutzer zu löschen.
     * @type {boolean}
     * @memberof TapirUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof TapirUser
     */
    dateJoined?: Date;
    /**
     * Optional. If filled, will be used instead of the administrative first name wherever possible. Only official documents will show the administrative first name.
     * @type {string}
     * @memberof TapirUser
     */
    usageName?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    pronouns?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    phoneNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof TapirUser
     */
    birthdate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    street2?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof TapirUser
     */
    coPurchaser?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TapirUser
     */
    allowsPurchaseTracking?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TapirUser
     */
    additionalMails?: Array<string>;
    /**
     * 
     * @type {PreferredLanguageEnum}
     * @memberof TapirUser
     */
    preferredLanguage?: PreferredLanguageEnum;
    /**
     * Die Gruppen, denen der Benutzer angehört. Ein Benutzer bekommt alle Berechtigungen dieser Gruppen.
     * @type {Array<number>}
     * @memberof TapirUser
     */
    groups?: Array<number>;
    /**
     * Spezifische Berechtigungen für diesen Benutzer.
     * @type {Array<number>}
     * @memberof TapirUser
     */
    userPermissions?: Array<number>;
}



/**
 * Check if a given object implements the TapirUser interface.
 */
export function instanceOfTapirUser(value: object): value is TapirUser {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function TapirUserFromJSON(json: any): TapirUser {
    return TapirUserFromJSONTyped(json, false);
}

export function TapirUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapirUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'country': json['country'],
        'password': json['password'],
        'lastLogin': json['last_login'] == null ? undefined : (new Date(json['last_login'])),
        'isSuperuser': json['is_superuser'] == null ? undefined : json['is_superuser'],
        'username': json['username'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'email': json['email'] == null ? undefined : json['email'],
        'isStaff': json['is_staff'] == null ? undefined : json['is_staff'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'dateJoined': json['date_joined'] == null ? undefined : (new Date(json['date_joined'])),
        'usageName': json['usage_name'] == null ? undefined : json['usage_name'],
        'pronouns': json['pronouns'] == null ? undefined : json['pronouns'],
        'phoneNumber': json['phone_number'] == null ? undefined : json['phone_number'],
        'birthdate': json['birthdate'] == null ? undefined : (new Date(json['birthdate'])),
        'street': json['street'] == null ? undefined : json['street'],
        'street2': json['street_2'] == null ? undefined : json['street_2'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'city': json['city'] == null ? undefined : json['city'],
        'coPurchaser': json['co_purchaser'] == null ? undefined : json['co_purchaser'],
        'allowsPurchaseTracking': json['allows_purchase_tracking'] == null ? undefined : json['allows_purchase_tracking'],
        'additionalMails': json['additional_mails'] == null ? undefined : json['additional_mails'],
        'preferredLanguage': json['preferred_language'] == null ? undefined : PreferredLanguageEnumFromJSON(json['preferred_language']),
        'groups': json['groups'] == null ? undefined : json['groups'],
        'userPermissions': json['user_permissions'] == null ? undefined : json['user_permissions'],
    };
}

  export function TapirUserToJSON(json: any): TapirUser {
      return TapirUserToJSONTyped(json, false);
  }

  export function TapirUserToJSONTyped(value?: Omit<TapirUser, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'password': value['password'],
        'last_login': value['lastLogin'] == null ? undefined : ((value['lastLogin'] as any).toISOString()),
        'is_superuser': value['isSuperuser'],
        'username': value['username'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'email': value['email'],
        'is_staff': value['isStaff'],
        'is_active': value['isActive'],
        'date_joined': value['dateJoined'] == null ? undefined : ((value['dateJoined']).toISOString()),
        'usage_name': value['usageName'],
        'pronouns': value['pronouns'],
        'phone_number': value['phoneNumber'],
        'birthdate': value['birthdate'] == null ? undefined : ((value['birthdate'] as any).toISOString().substring(0,10)),
        'street': value['street'],
        'street_2': value['street2'],
        'postcode': value['postcode'],
        'city': value['city'],
        'co_purchaser': value['coPurchaser'],
        'allows_purchase_tracking': value['allowsPurchaseTracking'],
        'additional_mails': value['additionalMails'],
        'preferred_language': PreferredLanguageEnumToJSON(value['preferredLanguage']),
        'groups': value['groups'],
        'user_permissions': value['userPermissions'],
    };
}

