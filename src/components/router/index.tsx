import { h } from "preact";
import { memo, useCallback, lazy, Suspense } from 'preact/compat';
import { Router as PreactRouter, route, RouterOnChangeArgs } from 'preact-router';

import checkIsAuth from 'utils/auth/check-is-auth';

const Home = lazy(() => import('routes/home'));
const Login = lazy(() => import('routes/login'));

import { AppUrls } from './enums';

const Router = () => {
    const onChangeRoute = useCallback((event: RouterOnChangeArgs) => {
        if(event.url !== AppUrls.Login && !checkIsAuth()) {
            route(AppUrls.Login, true);
        }
    }, []);

    return ( 
        <Suspense fallback={<div>loading...</div>}>
            <PreactRouter onChange={onChangeRoute}>
                <Home path={AppUrls.Home} />
                <Login path={AppUrls.Login} />
            </PreactRouter>
        </Suspense>
    )
}

export default memo(Router);