import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: '',
      next: '',
    };
  }

  handleClick = (event) => {
    this.setState((object) => calculate(object, event.target.value));
  };

  render() {
    const { total, operation, next } = this.state;
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
          <input
            value="AC"
            type="button"
            className="calculator__key calculator__padding btn light-gray"
            onClick={this.handleClick}
          />
          <input
            value="+/-"
            type="button"
            className="calculator__key calculator__key--operator calculator__padding btn light-gray"
            onClick={this.handleClick}
          />
          <input
            value="%"
            type="button"
            className="btn light-gray calculator__key calculator__key--operator calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="÷"
            type="button"
            className="btn orange calculator__key calculator__key--operator calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="7"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="8"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="9"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="x"
            type="button"
            className="btn orange calculator__key calculator__key--operator calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="4"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="5"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="6"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="-"
            type="button"
            className="btn orange calculator__key calculator__key--operator calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="1"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="2"
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            value="3"
            onClick={this.handleClick}
          />
          <input
            className="btn orange calculator__key calculator__key--operator calculator__padding"
            value="+"
            type="button"
            onClick={this.handleClick}
          />
          <input
            value="0"
            type="button"
            className="btn zero light-gray calculator__key calculator__key--zero calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="."
            type="button"
            className="btn light-gray calculator__key calculator__padding"
            onClick={this.handleClick}
          />
          <input
            value="="
            type="button"
            className="btn orange calculator__key calculator__key--operator calculator__padding"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
