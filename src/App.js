import React from 'react';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeature = id => {
    props.removeFeature(id);
  };

  const addFeature = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} />
        <Total />
      </div>
    </div>
  );
};

export default connect(null, { addFeature, removeFeature })(App);
