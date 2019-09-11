import React from 'react';

import { useDispatch } from 'react-redux';
import { addFeature as addFeatureAC, removeFeature as removeFeatureAC } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const dispatch = useDispatch();

  const removeFeature = feature => {
    dispatch(removeFeatureAC(feature));
  };

  const addFeature = feature => {
    dispatch(addFeatureAC(feature));
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

export default App;
