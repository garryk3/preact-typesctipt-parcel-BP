import transport from './transport';

export type HttpMethods = 'GET' | 'POST';

export type ServiceNames = 'transport' | 'logger';

export interface HttpParams {
    [index: string]: string | string[] | number | HttpParams;
}

export interface HttpRequestParams {
    url: string;
    method?: HttpMethods;
    params?: HttpParams;
}

export type Services = typeof transport;
