import TodoForm from './components/TodoForm';
import './App.css'
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };


  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }} className="todo-app">
      <h2>Todo List App</h2>
      <TodoForm onAdd={addTodo} />
   
    </div>
  );

}

export default App;