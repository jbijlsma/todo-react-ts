import { Todo as TodoModel } from "../models/todo";
import Todo from "./Todo";

const Todos = ({
  items,
  onDelete,
}: React.PropsWithChildren<{
  items: TodoModel[];
  onDelete: (item: TodoModel) => void;
}>) => {
  const todos = items.map((item) => (
    <Todo key={item.id} item={item} onClick={onDelete} />
  ));
  return <ul>{todos}</ul>;
};

export default Todos;
