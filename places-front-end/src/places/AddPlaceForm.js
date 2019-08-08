import React from 'react';

class AddPlaceForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', location: {latitude: props.addRequest.latLng[0], longitude: props.addRequest.latLng[1]}};
    }
  
    handleNameChange = (event) => {
      this.setState({name: event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
      this.props.onSubmitPlace(this.state)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddPlaceForm;