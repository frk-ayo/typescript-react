import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  removeHandler: () => void;
}> = (props) => {
  return (
    <li onClick={props.removeHandler} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
