/* eslint-disable no-useless-constructor */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable-next-line */

import React from 'react';

const ComponentsOfCalculator = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">0</div>
        <div className="btn light-gray">AC</div>
        <div className="btn light-gray">+/-</div>
        <div className="btn light-gray">%</div>
        <div className="btn orange">/</div>
        <div className="btn light-gray">7</div>
        <div className="btn light-gray">8</div>
        <div className="btn light-gray">9</div>
        <div className="btn orange">x</div>
        <div className="btn light-gray">4</div>
        <div className="btn light-gray">5</div>
        <div className="btn light-gray">6</div>
        <div className="btn orange">-</div>
        <div className="btn light-gray">1</div>
        <div className="btn light-gray">2</div>
        <div className="btn light-gray">3</div>
        <div className="btn orange">+</div>
        <div className="btn zero light-gray">0</div>
        <div className="btn light-gray">.</div>
        <div className="btn orange">=</div>
      </div>
    </div>
  );
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="frame">
        <ComponentsOfCalculator />
      </div>
    );
  }
}

export default Calculator;
