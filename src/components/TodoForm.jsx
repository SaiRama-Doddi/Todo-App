import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;

    onAdd({
      id: Date.now(),
      name,
      description,
      completed: status,
    });

    setName('');
    setDescription('');
    setStatus(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label style={{ marginLeft: '10px' }}>
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        Active
      </label>
      <button type="submit" style={{ marginLeft: '10px' }}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
