import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Rank extends Component {
  render() {
    const { numEntries } = this.props;
    return (
      <div className="">
        <p className='f3'>this is my Rank</p>
        <p className='f1'>#{numEntries}</p>
      </div>
    );
  }
}

Rank.propTypes = {
  numEntries: PropTypes.number.isRequired,
};

export default Rank;