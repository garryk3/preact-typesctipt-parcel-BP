import transport from './transport';

import { Services, ServiceNames } from './types';

const serviceLocator = new Map<ServiceNames, Services>();

export const getService = (serviceName: ServiceNames) => {
    if(!serviceLocator.has(serviceName)) {
        console.error(`[Service locator] error: service ${serviceName} not found!`);
    }
    return serviceLocator.get(serviceName);
};

export const setService = (serviceName: ServiceNames, service: any) => {
    serviceLocator.set(serviceName, service);
};

export const initializeServices = () => {
    setService('transport', transport);
};

export default serviceLocator;
