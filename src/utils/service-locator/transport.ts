import axios, { AxiosInstance } from 'axios';

import config from 'configs';
import { HttpRequestParams } from './types';

const instance = axios.create({
    baseURL: config.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

console.log('conf', config);

const setAuthHeader = (token: string) => {
    instance.defaults.headers.common.Authorization = token;
};

export const request = async (currentInstance: AxiosInstance, { url, method = 'POST', params }: HttpRequestParams) => {
    try {
        const { data, headers, status } = await currentInstance({
            url,
            data: params,
            method
        });

        if(data?.error) {
            throw data.error;
        }

        return {
            headers,
            status,
            error : null,
            result: data?.result
        };
    } catch(error) {
        return {
            result: null,
            error
        };
    }
};

const fetch = (params: HttpRequestParams) => request(instance, params);

export default {
    request,
    fetch,
    setAuthHeader
};
