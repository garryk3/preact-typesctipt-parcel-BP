declare namespace AppTypes {
    type Store = import('./utils/store/types').RootStore;

    type Dispatch = import('./utils/store/types').Dispatch;

    interface Event {
        target: EventTarget & {
            value?: string;
        } | null;
        preventDefault: Function;
    }

    interface RequestError {
        message: string;
    }
}
