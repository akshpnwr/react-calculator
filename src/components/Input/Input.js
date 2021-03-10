import classes from './Input.module.css';
import Number from './Number/Number';

const input = (props) => {
  return (
    <div className={classes.Input}>
      <Number clicked={props.clear} span={true} type="AC" />
      <Number clicked={props.delete} type="DEL" />
      <Number clicked={props.operatorClicked} type="÷" />
      <Number clicked={props.numberClicked} type="1" />
      <Number clicked={props.numberClicked} type="2" />
      <Number clicked={props.numberClicked} type="3" />
      <Number clicked={props.operatorClicked} type="*" />
      <Number clicked={props.numberClicked} type="4" />
      <Number clicked={props.numberClicked} type="5" />
      <Number clicked={props.numberClicked} type="6" />
      <Number clicked={props.operatorClicked} type="+" />
      <Number clicked={props.numberClicked} type="7" />
      <Number clicked={props.numberClicked} type="8" />
      <Number clicked={props.numberClicked} type="9" />
      <Number clicked={props.operatorClicked} type="-" />
      <Number clicked={props.numberClicked} type="." />
      <Number clicked={props.numberClicked} type="0" />
      <Number clicked={props.equalClicked} span={true} type="=" />
    </div>
  );
};

export default input;
