import { Todo as TodoModel } from "../models/todo";

const Todo = ({
  item,
  onClick,
}: React.PropsWithChildren<{
  item: TodoModel;
  onClick: (todo: TodoModel) => void;
}>) => {
  return <li onClick={() => onClick(item)}>{item.text}</li>;
};

export default Todo;
