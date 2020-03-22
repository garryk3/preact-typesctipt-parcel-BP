import { h } from 'preact';
import {
    memo, useCallback, lazy, Suspense
} from 'preact/compat';
import { Router as PreactRouter, RouterOnChangeArgs } from 'preact-router';
import { useDispatch } from 'react-redux';

import Loader from 'components/loader';

import { Urls } from './urls-enum';


const Login = lazy(() => import('routes/login'));
const Home = lazy(() => import('routes/home'));

const Router = () => {
    const dispatch: AppTypes.Dispatch = useDispatch();

    const onChangeRoute = useCallback((event: RouterOnChangeArgs) => {
        dispatch.router.transition({
            current : event.current.props,
            previous: event.previous ?? null
        });
    }, [dispatch.router]);

    return (
        <Suspense fallback={<Loader />}>
            <PreactRouter onChange={onChangeRoute}>
                <Login path={Urls.LOGIN} />
                <Home path={Urls.HOME} />
            </PreactRouter>
        </Suspense>
    );
};

export default memo(Router);
