import React, { Component } from "react";
type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onEdit: (id: number) => void;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
};
export default class TodoItem extends Component<Props> {
  render() {
    const { todo, onEdit, onCheck, onDelete } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onCheck(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.name}
        </span>
        <button onClick={() => onEdit(todo.id)}>Sửa</button>
        <button onClick={() => onDelete(todo.id)}>Xóa</button>
      </div>
    );
  }
}
