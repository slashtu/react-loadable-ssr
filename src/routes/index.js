import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route, Link } from 'react-router-dom';
import Loading from '../components/Loading';

const AsyncHome = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading
});

const AsyncAdoptions = Loadable({
  loader: () => import('../components/Adoptions'),
  loading: Loading
});

class Routes extends Component {
  static propTypes = {
    fetchQueue: PropTypes.array,
    store: PropTypes.object
  };

  render() {
    return (
        <div className="container">
          <header className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/adoptions">Adoptions</Link></li>
            </ul>
          </header>
          <Route exact path="/" component={AsyncHome} />
          <Route path="/adoptions" component={AsyncAdoptions} />
        </div>
    );
  }
}
export default Routes;
