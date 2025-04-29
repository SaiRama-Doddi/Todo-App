function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <div className="todo-item" style={{ marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''} style={{ marginLeft: '8px' }}>
          {todo.name} - {todo.description}
        </span>
        <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
          Delete
        </button>
      </div>
    );
  }
  
  export default TodoItem;
  