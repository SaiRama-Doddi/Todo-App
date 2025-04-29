import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

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
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Todo List App</h2>
      <TodoForm onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
