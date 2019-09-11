import React from 'react';

import { connect } from 'react-redux';
import { addItem } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const addItem = (e, item) => {
    e.preventDefault();
    // console.log('item is adding');
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures addItem={addItem} />
        <Total />
      </div>
    </div>
  );
};

export default connect(null, { addItem })(App);
