import router from 'components/router/model';

export interface RootModel {
    router: typeof router;
}

export const models: RootModel = {
    router
};
