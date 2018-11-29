import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import {Provider} from 'react-redux';

import Routes from '../../routes';

import {createStore} from 'store/configStore';
import stats from 'dist/react-loadable.json';

const renderer = () => (req, res) => {
  const modules = [];
  const context = {};
  const store = createStore();

  // pre-render for async data fetching
  ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Provider store={store}>
        <Router location={req.url} context={context}>
          <Routes />
        </Router>
      </Provider>
    </Loadable.Capture>
  );

  const state = store.getState();
  const promises = state.dataFetch && state.dataFetch.promises;

  Promise.all(promises)
    .then(() => {
      const bundles = getBundles(stats, modules);

      const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
      const components = bundles.filter(bundle => bundle.file.endsWith('.js'));

      const html = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <Provider store={store}>
            <Router location={req.url} context={context}>
              <Routes/>
            </Router>
          </Provider>
        </Loadable.Capture>
      );

      const serialization = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

      res.send(`
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My App</title>
            ${styles.map(style => `<link href="/dist/${style.file}" rel="stylesheet"/>`).join('\n')}
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
          </head>
          <body>
            <div id="app">${html}</div>
            <script src="/dist/main.js"></script>
            ${components.map(script => `<script src="/dist/${script.file}"></script>`).join('\n')}
            <script type="text/javascript" charSet="utf-8">
              window.__STORE__ = ${serialization}
            </script>
            <script>window.main();</script>
          </body>
        </html>
      `);
    });
};

export default renderer;
