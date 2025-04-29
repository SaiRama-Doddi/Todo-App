import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc) {
      return;
    }

    onAdd({
      id: Date.now(),
      name,
      desc,
      completed: active,
    });

    setName('');
    setDesc('');
    setActive(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <label style={{ marginLeft: '10px' }}>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Active
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
