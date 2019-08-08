import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Heading, Text, Divider, Icon } from 'gestalt';
import 'gestalt/dist/gestalt.css'


function Place(props) {

  return (

    <Box maxWidth={300} padding={2} column={12}>
    <Card >
        <Heading size="xs" text-align="left"> {props.data.name} </Heading>
        <Divider></Divider>
        <Box paddingX={3} paddingY={5}>
          <Text align="left">Address: [INSERT]</Text>
          <br></br>
          <Text align="left">Type: {props.data.type}</Text>
          <br></br>
          <Text align="left">Website URL: [INSERT]</Text>
          <br></br>  
          <Icon icon="star" accessibilityLabel="Star" color="orange"></Icon>
        </Box>
    </Card>
  </Box>




    );
  }
  
  Place.propTypes = {
      data: PropTypes.any.isRequired,
  };
  
  export default Place;