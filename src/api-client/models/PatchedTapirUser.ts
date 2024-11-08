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
 * @interface PatchedTapirUser
 */
export interface PatchedTapirUser {
    /**
     * 
     * @type {number}
     * @memberof PatchedTapirUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    password?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTapirUser
     */
    lastLogin?: Date | null;
    /**
     * Legt fest, dass der Benutzer alle Berechtigungen hat, ohne diese einzeln zuweisen zu müssen.
     * @type {boolean}
     * @memberof PatchedTapirUser
     */
    isSuperuser?: boolean;
    /**
     * Erforderlich. 150 Zeichen oder weniger. Nur Buchstaben, Ziffern und @/./+/-/_.
     * @type {string}
     * @memberof PatchedTapirUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    email?: string;
    /**
     * Legt fest, ob sich der Benutzer an der Administrationsseite anmelden kann.
     * @type {boolean}
     * @memberof PatchedTapirUser
     */
    isStaff?: boolean;
    /**
     * Legt fest, ob dieser Benutzer aktiv ist. Kann deaktiviert werden, anstatt Benutzer zu löschen.
     * @type {boolean}
     * @memberof PatchedTapirUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTapirUser
     */
    dateJoined?: Date;
    /**
     * Optional. If filled, will be used instead of the administrative first name wherever possible. Only official documents will show the administrative first name.
     * @type {string}
     * @memberof PatchedTapirUser
     */
    usageName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    pronouns?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    phoneNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedTapirUser
     */
    birthdate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    street2?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedTapirUser
     */
    coPurchaser?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedTapirUser
     */
    allowsPurchaseTracking?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchedTapirUser
     */
    additionalMails?: Array<string>;
    /**
     * 
     * @type {PreferredLanguageEnum}
     * @memberof PatchedTapirUser
     */
    preferredLanguage?: PreferredLanguageEnum;
    /**
     * Die Gruppen, denen der Benutzer angehört. Ein Benutzer bekommt alle Berechtigungen dieser Gruppen.
     * @type {Array<number>}
     * @memberof PatchedTapirUser
     */
    groups?: Array<number>;
    /**
     * Spezifische Berechtigungen für diesen Benutzer.
     * @type {Array<number>}
     * @memberof PatchedTapirUser
     */
    userPermissions?: Array<number>;
}



/**
 * Check if a given object implements the PatchedTapirUser interface.
 */
export function instanceOfPatchedTapirUser(value: object): value is PatchedTapirUser {
    return true;
}

export function PatchedTapirUserFromJSON(json: any): PatchedTapirUser {
    return PatchedTapirUserFromJSONTyped(json, false);
}

export function PatchedTapirUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedTapirUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'country': json['country'] == null ? undefined : json['country'],
        'password': json['password'] == null ? undefined : json['password'],
        'lastLogin': json['last_login'] == null ? undefined : (new Date(json['last_login'])),
        'isSuperuser': json['is_superuser'] == null ? undefined : json['is_superuser'],
        'username': json['username'] == null ? undefined : json['username'],
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

  export function PatchedTapirUserToJSON(json: any): PatchedTapirUser {
      return PatchedTapirUserToJSONTyped(json, false);
  }

  export function PatchedTapirUserToJSONTyped(value?: Omit<PatchedTapirUser, 'id'> | null, ignoreDiscriminator: boolean = false): any {
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
