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

export interface StatisticsNumberOfAbcdMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfActiveMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfCoPurchasersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfCreatedResignationsInSameMonthRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfExemptedMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfExemptedMembersThatWorkRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfFlyingMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfFrozenMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfInvestingMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfLongTermFrozenMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfPausedMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfPendingResignationsAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfPurchasingMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfShiftPartnersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

export interface StatisticsNumberOfWorkingMembersAtDateRetrieveRequest {
    atDate: Date;
    relative: boolean;
}

/**
 * 
 */
export class StatisticsApi extends runtime.BaseAPI {

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfAbcdMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfAbcdMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfAbcdMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfAbcdMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_abcd_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfAbcdMembersAtDateRetrieve(requestParameters: StatisticsNumberOfAbcdMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfAbcdMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfActiveMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfActiveMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfActiveMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfActiveMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_active_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfActiveMembersAtDateRetrieve(requestParameters: StatisticsNumberOfActiveMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfActiveMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfCoPurchasersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfCoPurchasersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfCoPurchasersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfCoPurchasersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_co_purchasers_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfCoPurchasersAtDateRetrieve(requestParameters: StatisticsNumberOfCoPurchasersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfCoPurchasersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfCreatedResignationsInSameMonthRetrieveRaw(requestParameters: StatisticsNumberOfCreatedResignationsInSameMonthRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfCreatedResignationsInSameMonthRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfCreatedResignationsInSameMonthRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_created_resignations_in_same_month`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfCreatedResignationsInSameMonthRetrieve(requestParameters: StatisticsNumberOfCreatedResignationsInSameMonthRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfCreatedResignationsInSameMonthRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfExemptedMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfExemptedMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfExemptedMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfExemptedMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_exempted_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfExemptedMembersAtDateRetrieve(requestParameters: StatisticsNumberOfExemptedMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfExemptedMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfExemptedMembersThatWorkRetrieveRaw(requestParameters: StatisticsNumberOfExemptedMembersThatWorkRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfExemptedMembersThatWorkRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfExemptedMembersThatWorkRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_exempted_members_that_work`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfExemptedMembersThatWorkRetrieve(requestParameters: StatisticsNumberOfExemptedMembersThatWorkRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfExemptedMembersThatWorkRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfFlyingMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfFlyingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfFlyingMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfFlyingMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_flying_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfFlyingMembersAtDateRetrieve(requestParameters: StatisticsNumberOfFlyingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfFlyingMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfFrozenMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfFrozenMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfFrozenMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfFrozenMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_frozen_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfFrozenMembersAtDateRetrieve(requestParameters: StatisticsNumberOfFrozenMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfFrozenMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfInvestingMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfInvestingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfInvestingMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfInvestingMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_investing_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfInvestingMembersAtDateRetrieve(requestParameters: StatisticsNumberOfInvestingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfInvestingMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfLongTermFrozenMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfLongTermFrozenMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfLongTermFrozenMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfLongTermFrozenMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_long_term_frozen_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfLongTermFrozenMembersAtDateRetrieve(requestParameters: StatisticsNumberOfLongTermFrozenMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfLongTermFrozenMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfMembersAtDateRetrieve(requestParameters: StatisticsNumberOfMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPausedMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfPausedMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfPausedMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfPausedMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_paused_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPausedMembersAtDateRetrieve(requestParameters: StatisticsNumberOfPausedMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfPausedMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPendingResignationsAtDateRetrieveRaw(requestParameters: StatisticsNumberOfPendingResignationsAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfPendingResignationsAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfPendingResignationsAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_pending_resignations_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPendingResignationsAtDateRetrieve(requestParameters: StatisticsNumberOfPendingResignationsAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfPendingResignationsAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPurchasingMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfPurchasingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfPurchasingMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfPurchasingMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_purchasing_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfPurchasingMembersAtDateRetrieve(requestParameters: StatisticsNumberOfPurchasingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfPurchasingMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfShiftPartnersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfShiftPartnersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfShiftPartnersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfShiftPartnersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_shift_partners_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfShiftPartnersAtDateRetrieve(requestParameters: StatisticsNumberOfShiftPartnersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfShiftPartnersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfWorkingMembersAtDateRetrieveRaw(requestParameters: StatisticsNumberOfWorkingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters['atDate'] == null) {
            throw new runtime.RequiredError(
                'atDate',
                'Required parameter "atDate" was null or undefined when calling statisticsNumberOfWorkingMembersAtDateRetrieve().'
            );
        }

        if (requestParameters['relative'] == null) {
            throw new runtime.RequiredError(
                'relative',
                'Required parameter "relative" was null or undefined when calling statisticsNumberOfWorkingMembersAtDateRetrieve().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['atDate'] != null) {
            queryParameters['at_date'] = (requestParameters['atDate'] as any).toISOString().substring(0,10);
        }

        if (requestParameters['relative'] != null) {
            queryParameters['relative'] = requestParameters['relative'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/statistics/number_of_working_members_at_date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Verify that the current user is authenticated.
     */
    async statisticsNumberOfWorkingMembersAtDateRetrieve(requestParameters: StatisticsNumberOfWorkingMembersAtDateRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.statisticsNumberOfWorkingMembersAtDateRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}