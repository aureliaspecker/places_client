import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css'

function Header(props) {
  return (
    <Box color="lightWash" shape="pill" column="12" padding={8}>
      <Heading size="lg">{ props.title }</Heading>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;