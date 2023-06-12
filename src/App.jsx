import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        { id: crypto.randomUUID(), title, is_completed: false },
        ...currentTodos,
      ];
    });
  };

  const toggleTodo = (id, is_completed) => {
    const toggleTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, is_completed: is_completed };
      }
      return todo;
    });

    return setTodos(
      toggleTodos.sort((a, b) => a.is_completed - b.is_completed)
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 px-4 py-2 p-3">
      <h1 className="text-2xl font-bold text-left m-2">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ) : (
        <p className="text-lg text-center p-3">No todos yet!</p>
      )}
    </div>
  );
};

export default App;
