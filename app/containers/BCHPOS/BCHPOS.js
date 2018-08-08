/*
 * BCHPOS
 *
 * This is the page for the POS
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import NumPad from 'react-numpad';

import './style.scss';

export default class BCHPOS extends React.PureComponent {
  render() {
    return (
      <div className="cashier-page">
        <Helmet>
          <title>Cashier Page</title>
          <meta
            name="description"
            content="Cashier page of React.js BCHPOS application"
          />
        </Helmet>
        <h1>Cashier Page</h1>
        <NumPad.Number
          onChange={(value) => { console.log('value', value)}}
          label={'Total'}
          placeholder={'my placeholder'}
          value={100}
        />
      </div>
    );
  }
}

// BCHPOS.propTypes = {};
