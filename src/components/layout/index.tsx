import { h } from 'preact';
import { memo } from 'preact/compat';

import Grid from '@material-ui/core/Grid';

import Router from 'components/router';
import Sidebar from 'components/sidebar';

const Layout = () => (
    <Grid container>
        <Grid item xs={3}>
            <Sidebar />
        </Grid>
        <Grid item xs={9}>
            <Router />
        </Grid>
    </Grid>
);

export default memo(Layout);
