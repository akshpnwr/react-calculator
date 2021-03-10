import classes from './Output.module.css';

const output = (props) => {
  return (
    <div className={classes.Output}>
      <div className={classes.Previous}>
        {props.prev} {props.operator}
      </div>
      <div className={classes.Current}>{props.cur}</div>
    </div>
  );
};

export default output;
