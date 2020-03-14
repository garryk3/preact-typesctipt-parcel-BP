import { h, render } from 'preact';
import 'module-alias/register';

import App from '@components/router';

const node = document.getElementById('app');

render(<App />, node);