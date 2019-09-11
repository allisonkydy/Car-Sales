import React from 'react';

import { connect } from 'react-redux';
import { addFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const addFeature = (e, item) => {
    e.preventDefault();
    // console.log('item is adding');
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} />
        <Total />
      </div>
    </div>
  );
};

export default connect(null, { addFeature })(App);
