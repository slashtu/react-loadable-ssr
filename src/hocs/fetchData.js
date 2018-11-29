/*global __SERVER__*/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { push } from 'reducers/dataFetch';

const mapStateToProps = (state) => {
  const isDataFetchEnabled = state.dataFetch.isDataFetchEnabled;
  return { isDataFetchEnabled };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    push: bindActionCreators(push, dispatch)
  };
};

const fetchData = fetch => {
  return WrappedComponent => {
    class DataLoader extends Component {
      static propTypes = {
        isDataFetchEnabled: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
      };

      constructor(props) {
        super(props);
        const {dispatch, isDataFetchEnabled, push} = props;

        if (__SERVER__) {
          push(fetch({ dispatch }));
        } else if (isDataFetchEnabled){
          fetch({ dispatch });
        }
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
    return connect(mapStateToProps, mapDispatchToProps)(DataLoader);
  };
};

export default fetchData;
