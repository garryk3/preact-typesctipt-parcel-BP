import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from 'preact-router/match';

import AppUrls from 'components/router/urls-enum';

const Sidebar = () => (
  <div>
    <Link activeClassName="active" href={AppUrls.Home}>Home</Link>
    <Link activeClassName="active" href={AppUrls.Login}>Login</Link>
  </div>
);

export default memo(Sidebar);
