import 'isomorphic-unfetch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchData from '../hocs/fetchData';
import { queryAdoptions } from 'reducers/adoptions';

const mapStateToProps = ({ adoptions }) => {
  return { adoptions };
}

const fetchAdoptions = ({ dispatch }) => {
  return dispatch(queryAdoptions()) ;
};

@fetchData(fetchAdoptions)
@connect(mapStateToProps)
class FetchAdoptionsComponent extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  renderImages = (adoptions) => {
    return adoptions.map(e => {
      return (
        <div key={e.AnimalId} className="col-sm">
          <img src={`http://asms.coa.gov.tw/Amlapp/Upload/pic/${e.pic}`} alt={e.AnimalId}/>
        </div>
      );
    });
  }

  render() {
    const {adoptions} = this.props;
    return (
      <div className="row">
        {this.renderImages(adoptions)}
      </div>
    );
  }
}

export default FetchAdoptionsComponent;
