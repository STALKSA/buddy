/* tslint:disable */
/* eslint-disable */
/**
 * BuddyLanguage.WebApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

// import { Language } from './language';
// import { WordEntityStatus } from './word-entity-status';
import {
    Language,WordEntityStatus,
} from ".";

/**
 * 
 *
 * @export
 * @interface AddWordEntityRequest
 */
export interface AddWordEntityRequest {

    /**
     * @type {string}
     * @memberof AddWordEntityRequest
     */
    accountId: string;

    /**
     * @type {string}
     * @memberof AddWordEntityRequest
     */
    word: string;

    /**
     * @type {Language}
     * @memberof AddWordEntityRequest
     */
    language: Language;

    /**
     * @type {WordEntityStatus}
     * @memberof AddWordEntityRequest
     */
    status: WordEntityStatus;
}
