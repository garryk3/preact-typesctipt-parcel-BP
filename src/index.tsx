import { h, render } from 'preact';

import App from './components/app';

const node = document.getElementById('app');

render(<App />, node);