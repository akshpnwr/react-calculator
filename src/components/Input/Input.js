import classes from './Input.module.css';
import Number from './Number/Number';

const input = () => {
  return (
    <div className={classes.Input}>
      <Number span={true} type="AC" />
      <Number type="DEL" />
      <Number type="÷" />
      <Number type="1" />
      <Number type="2" />
      <Number type="3" />
      <Number type="*" />
      <Number type="4" />
      <Number type="5" />
      <Number type="6" />
      <Number type="+" />
      <Number type="7" />
      <Number type="8" />
      <Number type="9" />
      <Number type="-" />
      <Number type="." />
      <Number type="0" />
      <Number span={true} type="=" />
    </div>
  );
};

export default input;
