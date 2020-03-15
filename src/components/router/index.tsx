import { h } from "preact";
import { memo, useCallback } from 'preact/compat';
import { Router as PreactRouter, route, RouterOnChangeArgs } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import checkIsAuth from 'components/auth/check-is-auth';

import { AppUrls } from './enums';

const Router = () => {
    const onChangeRoute = useCallback((event: RouterOnChangeArgs) => {
        if(event.url !== AppUrls.Login && !checkIsAuth()) {
            route(AppUrls.Login, true);
        }
    }, []);

    return ( 
        <PreactRouter onChange={onChangeRoute}>
            <AsyncRoute
                path={AppUrls.Home}
                getComponent={ () => import('../../routes/home').then(module => module.default) }
            />
            <AsyncRoute
                path={AppUrls.Login}
                getComponent={ () => import('../../routes/login').then(module => module.default) }
            />
        </PreactRouter>
    )
}

export default memo(Router);