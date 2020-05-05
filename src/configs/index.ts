import defaultConfig from './default';

const buildConfig = {
    API_URL: process.env.API_URL
};

type Key = keyof typeof buildConfig;

Object.keys(buildConfig).forEach((key) => {
    if(buildConfig[key as Key] === undefined) {
        delete buildConfig[key as Key];
    }
});

export default {
    ...defaultConfig,
    ...buildConfig
};
