import { h } from 'preact';
import { memo } from 'preact/compat';

import classes from './style.pcss';

console.log(classes);

const Login = () => <div className={classes.login}>Login</div>;

export default memo(Login);
