import { h } from 'preact';
import {
    memo, useCallback, lazy, Suspense
} from 'preact/compat';
import { Router as PreactRouter, RouterOnChangeArgs, Route } from 'preact-router';
import { useDispatch } from 'react-redux';

import Loader from 'components/loader';

import handleMiddlewares from './middlewars';
import { Urls } from './urls-enum';
import { RouterOnChangeParams } from './types';


const Login = lazy(() => import('routes/login'));
// const Home = lazy(() => import('routes/home'));

const Router = () => {
    const dispatch: AppTypes.Dispatch = useDispatch();

    const onChangeRoute = useCallback((event: RouterOnChangeArgs) => {
        handleMiddlewares({ dispatch, event: event as RouterOnChangeParams });
    }, [dispatch]);

    return (
        <Suspense fallback={<Loader />}>
            <PreactRouter onChange={onChangeRoute}>
                <Route path={Urls.LOGIN} component={Login} />
            </PreactRouter>
        </Suspense>
    );
};

export default memo(Router);
