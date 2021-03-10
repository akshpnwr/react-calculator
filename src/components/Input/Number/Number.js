import classes from './Number.module.css';

const number = (props) => {
  let buttonClasses = [classes.Button];

  if (props.span) buttonClasses.push(classes.Span);
  return <button className={buttonClasses.join(' ')}>{props.type}</button>;
};

export default number;
