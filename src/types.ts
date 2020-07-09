declare namespace AppTypes {
    type Store = import('./utils/store/types').RootStore;

    type Dispatch = import('./utils/store/types').Dispatch;

    interface Event {
        [index: string]: any;
    }

    interface RequestError {
        message: string;
    }
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.pcss' {
    const content: any;
    export default content;
}
