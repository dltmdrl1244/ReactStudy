import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./todoapp2/TodoTemplate";
import TodoInsert from "./todoapp2/TodoInsert";
import TodoList from "./todoapp2/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      setTodos(
        todos.concat({
          id: nextId.current,
          text: text,
          checked: false,
        })
      );
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </TodoTemplate>
    </div>
  );
}
