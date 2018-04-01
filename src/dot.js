'use strict';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class Dot extends Component {

  render() {
    const { color, diameter } = this.props;

    return (
      <View
        style={[{
          backgroundColor: color,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }, this.props.style]}
      />
    );
  }
}

Dot.propTypes = {
  color: PropTypes.string.isRequired,
  diameter: PropTypes.number.isRequired
}

Dot.defaultProps = {
  color: 'rgba(192, 192, 192, 1)',
  diameter: 10,
};