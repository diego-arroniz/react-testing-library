import React from 'react';
import './App.css';
import BasicPageComponent from 'src/components/1.Basic-test/BasicPage';
import ExpectedProperties from 'src/components/2.Presentational-components/expected-properties/ExpectedProperties.component';

function App() {
  return (
    <>
      <BasicPageComponent />
      <ExpectedProperties />
    </>
  );
}

export default App;
