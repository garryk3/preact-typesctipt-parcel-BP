import axios, { AxiosInstance } from 'axios';

import { HttpRequestParams } from './types';

const baseInstance = axios.create({
    baseURL: 'http://test/api'
});

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = token;
};

export const request = async (instance: AxiosInstance, { url, method = 'POST', params }: HttpRequestParams) => {
    try {
        const { data, headers, status } = await instance({
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

const baseRequest = (params: HttpRequestParams) => request(baseInstance, params);

export default {
    request,
    baseRequest,
    setAuthHeader
};
