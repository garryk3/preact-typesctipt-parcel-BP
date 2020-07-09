import { h } from 'preact';

import useStyles from './styles';

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            loader
        </div>
    );
}
