import Output from '../../components/Output/Output';
import Input from '../../components/Input/Input';

const layout = (props) => {
  return (
    <div>
      <Output cur={props.cur} prev={props.prev} operator={props.operator} />
      <Input
        numberClicked={props.numberClicked}
        operatorClicked={props.operatorClicked}
        equalClicked={props.equalClicked}
        clear={props.clear}
        delete={props.delete}
      />
    </div>
  );
};

export default layout;
