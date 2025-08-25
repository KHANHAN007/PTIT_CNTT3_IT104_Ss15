import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
  onEdit: (id: number) => void;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onEdit, onCheck, onDelete }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
