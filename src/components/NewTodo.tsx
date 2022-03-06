import React, { useRef } from "react";
import { Todo } from "../models/todo";

const NewTodo = ({
  onAddTodo,
}: React.PropsWithChildren<{ onAddTodo: (todo: Todo) => void }>) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = textInputRef.current!.value;

    if (text.trim().length === 0) {
      return;
    }

    onAddTodo(new Todo(text));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
