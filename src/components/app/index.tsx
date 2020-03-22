import { h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'utils/themes/default';
import store from 'utils/store';
import { initializeServices } from 'utils/service-locator';

const App = () => {
    useEffect(() => {
        initializeServices();
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                App started!
            </ThemeProvider>
        </Provider>
    );
};

export default memo(App);
