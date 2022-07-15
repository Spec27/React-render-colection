import React, { Component } from 'react';
import Contols from './Contlos';
import s from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
    console.log('click counter +1');
  };

  handleDecriment = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
    console.log('click counter -');
  };

  render() {
    return (
      <div className={s.Counter}>
        <span className={s.CounterValue}>{this.state.value}</span>
        <Contols
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecriment}
        />
      </div>
    );
  }
}

export default Counter;
