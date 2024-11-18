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


import * as runtime from '../runtime';
import type {
  PaginatedTapirUserList,
  PatchedTapirUser,
  TapirUser,
} from '../models/index';
import {
    PaginatedTapirUserListFromJSON,
    PaginatedTapirUserListToJSON,
    PatchedTapirUserFromJSON,
    PatchedTapirUserToJSON,
    TapirUserFromJSON,
    TapirUserToJSON,
} from '../models/index';

export interface CoopApiTapirUsersCreateRequest {
    tapirUser: Omit<TapirUser, 'id'>;
}

export interface CoopApiTapirUsersDestroyRequest {
    id: number;
}

export interface CoopApiTapirUsersListRequest {
    limit?: number;
    offset?: number;
}

export interface CoopApiTapirUsersPartialUpdateRequest {
    id: number;
    patchedTapirUser?: Omit<PatchedTapirUser, 'id'>;
}

export interface CoopApiTapirUsersRetrieveRequest {
    id: number;
}

export interface CoopApiTapirUsersUpdateRequest {
    id: number;
    tapirUser: Omit<TapirUser, 'id'>;
}

/**
 * 
 */
export class CoopApi extends runtime.BaseAPI {

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersCreateRaw(requestParameters: CoopApiTapirUsersCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TapirUser>> {
        if (requestParameters['tapirUser'] == null) {
            throw new runtime.RequiredError(
                'tapirUser',
                'Required parameter "tapirUser" was null or undefined when calling coopApiTapirUsersCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/coop/api/tapir_users/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TapirUserToJSON(requestParameters['tapirUser']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TapirUserFromJSON(jsonValue));
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersCreate(requestParameters: CoopApiTapirUsersCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TapirUser> {
        const response = await this.coopApiTapirUsersCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersDestroyRaw(requestParameters: CoopApiTapirUsersDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coopApiTapirUsersDestroy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coop/api/tapir_users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersDestroy(requestParameters: CoopApiTapirUsersDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.coopApiTapirUsersDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersListRaw(requestParameters: CoopApiTapirUsersListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedTapirUserList>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coop/api/tapir_users/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedTapirUserListFromJSON(jsonValue));
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersList(requestParameters: CoopApiTapirUsersListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedTapirUserList> {
        const response = await this.coopApiTapirUsersListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersPartialUpdateRaw(requestParameters: CoopApiTapirUsersPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TapirUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coopApiTapirUsersPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/coop/api/tapir_users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedTapirUserToJSON(requestParameters['patchedTapirUser']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TapirUserFromJSON(jsonValue));
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersPartialUpdate(requestParameters: CoopApiTapirUsersPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TapirUser> {
        const response = await this.coopApiTapirUsersPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersRetrieveRaw(requestParameters: CoopApiTapirUsersRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TapirUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coopApiTapirUsersRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/coop/api/tapir_users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TapirUserFromJSON(jsonValue));
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersRetrieve(requestParameters: CoopApiTapirUsersRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TapirUser> {
        const response = await this.coopApiTapirUsersRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersUpdateRaw(requestParameters: CoopApiTapirUsersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TapirUser>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coopApiTapirUsersUpdate().'
            );
        }

        if (requestParameters['tapirUser'] == null) {
            throw new runtime.RequiredError(
                'tapirUser',
                'Required parameter "tapirUser" was null or undefined when calling coopApiTapirUsersUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/coop/api/tapir_users/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TapirUserToJSON(requestParameters['tapirUser']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TapirUserFromJSON(jsonValue));
    }

    /**
     * Verify that the current user has all specified permissions.
     */
    async coopApiTapirUsersUpdate(requestParameters: CoopApiTapirUsersUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TapirUser> {
        const response = await this.coopApiTapirUsersUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
