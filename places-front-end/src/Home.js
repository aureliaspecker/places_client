import React from 'react';
import Header from './Header';
import ShowPlaces from './ShowPlaces';

function Home(props) {
  return (
    <div>
      <Header title="A day in London"/>
      <ShowPlaces places={props.places}/>
    </div>
  );
}

export default Home;
