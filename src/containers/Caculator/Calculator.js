import { Component } from 'react';
import Layout from '../Layout/Layout';
import classes from './Calculator.module.css';

class Calculator extends Component {
  state = {
    cur: null,
    prev: null,
    operator: null,
    result: null,
  };

  numberButtonHandler = (e) => {
    const value = this.state.cur
      ? this.state.cur + e.target.textContent
      : e.target.textContent;

    this.setState({
      cur: value,
    });
  };

  operatorButtonHandler = (e) => {
    const current = this.state.cur;

    let operator = e.target.textContent;

    if (!current) {
      this.setState({
        operator: operator,
      });
      return;
    }

    this.setState({
      prev: current,
      cur: null,
      operator: operator,
    });

    if (!(this.state.prev && this.state.cur)) return;

    const result = this.performOperation();

    this.setState({
      prev: result,
    });
  };

  equalButtonHandler = () => {
    const result = this.performOperation();

    this.setState({
      prev: null,
      cur: result,
      operator: null,
    });
  };

  clearStateHandler = () => {
    this.setState({
      cur: null,
      prev: null,
      operator: null,
    });
  };

  performOperation = () => {
    console.log(this.state.cur, this.state.prev);

    let result;

    switch (this.state.operator) {
      case '+':
        result = Number(this.state.prev) + Number(this.state.cur);
        break;

      case '-':
        result = Number(this.state.prev) - Number(this.state.cur);
        break;

      case '*':
        result = Number(this.state.prev) * Number(this.state.cur);
        break;

      case '÷':
        result = Number(this.state.prev) / Number(this.state.cur);
        break;

      default:
        break;
    }

    return result;
  };

  deleteButtonHandler = () => {
    this.setState({
      cur: null,
    });
  };

  render() {
    return (
      <div className={classes.Calc}>
        <Layout
          numberClicked={(e) => this.numberButtonHandler(e)}
          operatorClicked={(e) => this.operatorButtonHandler(e)}
          equalClicked={this.equalButtonHandler}
          clear={this.clearStateHandler}
          delete={this.deleteButtonHandler}
          cur={this.state.cur}
          prev={this.state.prev}
          operator={this.state.operator}
        />
      </div>
    );
  }
}

export default Calculator;
