import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return todo.completed;
    if (filter === 'inactive') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
    <h2>Todo List App</h2>
    <TodoForm onAdd={addTodo} />
    <div className="todo-filter">
      <TodoFilter filter={filter} setFilter={setFilter} />
    </div>
    {filteredTodos.length > 0 ? (
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    ) : (
      <p className="no-todos">No Todos to display.</p>
    )}
  </div>
  );
}

export default App;
