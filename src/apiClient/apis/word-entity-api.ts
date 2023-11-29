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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddWordEntityRequest } from '../models';
import { UpdateWordEntityRequest } from '../models';
import { WordEntity } from '../models';
import { WordEntityResponse } from '../models';
/**
 * WordEntityApi - axios parameter creator
 * @export
 */
export const WordEntityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordentityAddPost: async (body?: AddWordEntityRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/wordentity/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string")/*|| localVarRequestOptions.headers['Content-Type'] === 'application/json'*/;
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [accountId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordentityIdAccountGet: async (accountId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/wordentity/id-account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (accountId !== undefined) {
                localVarQueryParameter['accountId'] = accountId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [wordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordentityIdGet: async (wordId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/wordentity/id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (wordId !== undefined) {
                localVarQueryParameter['wordId'] = wordId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        wordentityUpdatePost: async (body?: UpdateWordEntityRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/wordentity/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string")/*|| localVarRequestOptions.headers['Content-Type'] === 'application/json'*/;
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WordEntityApi - functional programming interface
 * @export
 */
export const WordEntityApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityAddPost(body?: AddWordEntityRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WordEntityResponse>>> {
            const localVarAxiosArgs = await WordEntityApiAxiosParamCreator(configuration).wordentityAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [accountId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityIdAccountGet(accountId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<WordEntity>>>> {
            const localVarAxiosArgs = await WordEntityApiAxiosParamCreator(configuration).wordentityIdAccountGet(accountId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [wordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityIdGet(wordId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WordEntityResponse>>> {
            const localVarAxiosArgs = await WordEntityApiAxiosParamCreator(configuration).wordentityIdGet(wordId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityUpdatePost(body?: UpdateWordEntityRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<WordEntityResponse>>> {
            const localVarAxiosArgs = await WordEntityApiAxiosParamCreator(configuration).wordentityUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WordEntityApi - factory interface
 * @export
 */
export const WordEntityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AddWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityAddPost(body?: AddWordEntityRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<WordEntityResponse>> {
            return WordEntityApiFp(configuration).wordentityAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [accountId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityIdAccountGet(accountId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<WordEntity>>> {
            return WordEntityApiFp(configuration).wordentityIdAccountGet(accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [wordId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityIdGet(wordId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<WordEntityResponse>> {
            return WordEntityApiFp(configuration).wordentityIdGet(wordId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateWordEntityRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async wordentityUpdatePost(body?: UpdateWordEntityRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<WordEntityResponse>> {
            return WordEntityApiFp(configuration).wordentityUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WordEntityApi - object-oriented interface
 * @export
 * @class WordEntityApi
 * @extends {BaseAPI}
 */
export class WordEntityApi extends BaseAPI {
    /**
     * 
     * @param {AddWordEntityRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordEntityApi
     */
    public async wordentityAddPost(body?: AddWordEntityRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<WordEntityResponse>> {
        return WordEntityApiFp(this.configuration).wordentityAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [accountId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordEntityApi
     */
    public async wordentityIdAccountGet(accountId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<WordEntity>>> {
        return WordEntityApiFp(this.configuration).wordentityIdAccountGet(accountId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [wordId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordEntityApi
     */
    public async wordentityIdGet(wordId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<WordEntityResponse>> {
        return WordEntityApiFp(this.configuration).wordentityIdGet(wordId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateWordEntityRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WordEntityApi
     */
    public async wordentityUpdatePost(body?: UpdateWordEntityRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<WordEntityResponse>> {
        return WordEntityApiFp(this.configuration).wordentityUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
