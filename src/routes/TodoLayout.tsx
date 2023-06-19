import { useState } from "react";
import TodoList from "../components/Planner/TodoList";
import NewTodo from "../components/Planner/NewTodo";
import { Todo } from "../todo.model";

const TodoLayout = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    });
  }
  
  return (
    <>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  );
}

export default TodoLayout;