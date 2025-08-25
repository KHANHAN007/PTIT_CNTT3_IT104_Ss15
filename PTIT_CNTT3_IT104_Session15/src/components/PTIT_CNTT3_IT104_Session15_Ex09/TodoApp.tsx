import React, { Component } from "react";
import TodoList from "./TodoList";
import ConfirmModal from "./ConfirmModal";

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  input: string;
  editingId: number | null;
  showModal: boolean;
  deleteId: number | null;
  error: string;
};

export default class TodoApp extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos") || "[]"),
      input: "",
      editingId: null,
      showModal: false,
      deleteId: null,
      error: "",
    };
  }

  saveToStorage = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value, error: "" });
  };

  validate = (name: string) => {
    if (!name.trim()) return "Tên công việc không được để trống";
    if (
      this.state.todos.some(
        (todo) =>
          todo.name === name &&
          (this.state.editingId === null || todo.id !== this.state.editingId)
      )
    )
      return "Tên công việc không được phép trùng";
    return "";
  };

  handleAddOrUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const { input, editingId, todos } = this.state;
    const error = this.validate(input);
    if (error) {
      this.setState({ error });
      return;
    }
    if (editingId === null) {
      const newTodo: Todo = {
        id: Date.now(),
        name: input,
        completed: false,
      };
      const newTodos = [...todos, newTodo];
      this.saveToStorage(newTodos);
      this.setState({ todos: newTodos, input: "", error: "" });
    } else {
      const newTodos = todos.map((todo) =>
        todo.id === editingId ? { ...todo, name: input } : todo
      );
      this.saveToStorage(newTodos);
      this.setState({
        todos: newTodos,
        input: "",
        editingId: null,
        error: "",
      });
    }
  };

  handleEdit = (id: number) => {
    const todo = this.state.todos.find((t) => t.id === id);
    if (todo) {
      this.setState({ input: todo.name, editingId: id, error: "" });
    }
  };

  handleCheck = (id: number) => {
    const newTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveToStorage(newTodos);
    this.setState({ todos: newTodos });
  };

  handleDelete = (id: number) => {
    this.setState({ showModal: true, deleteId: id });
  };

  confirmDelete = () => {
    const { deleteId, todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    this.saveToStorage(newTodos);
    this.setState({ todos: newTodos, showModal: false, deleteId: null });
  };

  cancelDelete = () => {
    this.setState({ showModal: false, deleteId: null });
  };

  render() {
    const { todos, input, editingId, showModal, error } = this.state;
    return (
      <div>
        <h2>Danh sách công việc</h2>
        <form onSubmit={this.handleAddOrUpdate}>
          <input
            type="text"
            placeholder="Thêm công việc mới..."
            value={input}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            {editingId === null ? "Thêm" : "Cập nhật"}
          </button>
        </form>
        {error && <p>{error}</p>}
        <TodoList
          todos={todos}
          onEdit={this.handleEdit}
          onCheck={this.handleCheck}
          onDelete={this.handleDelete}
        />
        {showModal && (
          <ConfirmModal
            onConfirm={this.confirmDelete}
            onCancel={this.cancelDelete}
          />
        )}
      </div>
    );
  }
}