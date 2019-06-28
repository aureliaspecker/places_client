import React from 'react';
import PropTypes from 'prop-types';

const mainStyle = {
    backgroundColor: '#eac9af',
    color: '#282828', 
    padding: '40px 20px 40px 20px'
  };
  

function Header(props) {
  return (
    <header style={mainStyle}>
    <h1> { props.title } </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;