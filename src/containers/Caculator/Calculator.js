import { Component } from 'react';
import Layout from '../Layout/Layout';
import classes from './Calculator.module.css';

class Calculator extends Component {
  render() {
    return (
      <div className={classes.Calc}>
        <Layout />
      </div>
    );
  }
}

export default Calculator;
