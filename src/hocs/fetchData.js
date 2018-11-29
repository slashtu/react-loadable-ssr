import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { push } from 'reducers/dataFetch';

const mapStateToProps = (state) => {
  const isDataFetchEnabled = state.dataFetch.isDataFetchEnabled;
  return { isDataFetchEnabled };
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    push: bindActionCreators(push, dispatch)
  };
};

const fetchData = fetch => {
  return WrappedComponent => {
    class DataLoader extends Component {
      componentWillMount() {
        const {dispatch, isDataFetchEnabled, push} = this.props;

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
