import { h } from "preact";
import { memo } from 'preact/compat';

import Router from "@components/router";

const App = (props: {}) => {
    return (
        <div>
            <Router />
        </div>
    )
}

export default memo(App);