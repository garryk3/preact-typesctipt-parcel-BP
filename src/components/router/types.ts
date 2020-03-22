import { RouterOnChangeArgs } from 'preact-router';

import { Urls } from './urls-enum';

export type AppUrls = Urls;

export interface Route {
    matches: {
        [index: string]: any;
    }
    path: string;
    url: string;
}

export interface TrasnsitionPayload {
    current : RouterOnChangeArgs['current']['props'];
    previous: RouterOnChangeArgs['previous'] | null;
}

export interface RouterReducer {
    current: Route | null;
    previous: string | null;
}
