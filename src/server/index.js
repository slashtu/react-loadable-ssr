import express from 'express';
import Loadable from 'react-loadable';
import renderer from './renderer';

const app = express();

app.use('/dist', express.static('dist'));

app.get('*', renderer());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
}).catch(err => console.log(err));
