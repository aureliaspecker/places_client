import React from 'react';
import './App.css';
import ShowPlaces from '../places/ShowPlaces';
import Header from './Header';

class App extends React.Component {

  render () {

    return (
      <div className="App">
        <Header title="A day in London"/>
        <ShowPlaces/>
      </div>
    );
  }

}

export default App;

// next: make it refresh every x seconds / style it / etc.
