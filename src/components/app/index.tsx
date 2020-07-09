import { h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { Provider } from 'react-redux';

import Router from 'components/router';
import store from 'utils/store';
import { initializeServices } from 'utils/service-locator';

const App = () => {
    useEffect(() => {
        initializeServices();
    }, []);

    return (
        <Provider store={store}>
            <div>
                <Router />
            </div>
        </Provider>
    );
};

export default memo(App);
