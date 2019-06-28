import React from 'react';
import './App.css';
import Home from './Home';
import { getPlaces } from './services/placesApi';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = { places:[]}
  }
  
  componentWillMount () {
    getPlaces().then(
      places => {
        console.log(places)
        this.setState({
          places
        }) 
      }
    )
  }

  render () {


    return (
      <div className="App">
        <Home places={this.state.places}/> 
      </div>
    );
  }

}

export default App;

// next: make it refresh every x seconds / style it / etc.
