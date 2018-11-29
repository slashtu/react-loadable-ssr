import React, {Component} from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';

const AsyncFetchAdoptionsComponent = Loadable({
  loader: () => import('./FetchAdoptionsComponent'),
  loading: Loading
});

class Adoptions extends Component {
  render() {
    return (
      <section className="jumbotron text-center">
        <h2>Adoptions</h2>
        <AsyncFetchAdoptionsComponent/>
      </section>
    );
  }
}

export default Adoptions;
