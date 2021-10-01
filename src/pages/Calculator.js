/* eslint-disable import/extensions */
import React from 'react';
import CalculatorApp from '../components/Calculator';

const Calculator = () => (
  <section className="calculator-container container">
    <h1 className="calculator-header">Let us do some Math!</h1>
    <div className="calculator-app">
      <CalculatorApp />
    </div>
  </section>
);

export default Calculator;
