import React from 'react';
import PropTypes from 'prop-types';

const Loading = (props) => {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    }
    return null;
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  }
  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
  error: PropTypes.object
};

export default Loading;
