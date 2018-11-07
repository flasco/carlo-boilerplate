import React, { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

const Home = suspenseContainer(lazy(() => import('./pages/home')));

const Page2 = suspenseContainer(lazy(() => import('./pages/page2')));

function suspenseContainer(Component) {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const Test = () => <div>Test!</div>;

const routes = (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Test} />
    </Switch>
  </HashRouter>
);

export default routes;
