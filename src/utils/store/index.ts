import { init } from '@rematch/core';
import { createLogger } from 'redux-logger';

import { models } from './models';
import plugins from './plugins';

const store = init({
    models,
    plugins,
    redux: {
        middlewares: [
            createLogger()
        ]
    }
});

export default store;
