import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({
    total: 0,
    operation: '',
    next: '',
  });

  const handleClick = (event) => {
    setObject(calculate(object, event.target.value));
  };

  const { total, operation, next } = object;
  return (
    <div className="container">
      <div className="wrapper">
        <input
          type="text"
          className="calculator__output calculator__padding screen"
          value={` ${
            total || operation || next
              ? `${total || ''} ${operation || ''} ${next || ''}`
              : '0'
          }`}
          disabled
        />
        <input value="AC" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="+/-" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="%" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="÷" type="button" className="btn orange" onClick={handleClick} />
        <input value="7" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="8" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="9" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="x" type="button" className="btn orange" onClick={handleClick} />
        <input value="4" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="5" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="6" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="-" type="button" className="btn orange" onClick={handleClick} />
        <input value="1" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="2" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="3" type="button" className="btn light-gray" onClick={handleClick} />
        <input value="+" type="button" className="btn orange" onClick={handleClick} />
        <input value="0" type="button" className="btn zero light-gray" onClick={handleClick} />
        <input value="." type="button" className="btn light-gray" onClick={handleClick} />
        <input value="=" type="button" className="btn orange calculator" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
