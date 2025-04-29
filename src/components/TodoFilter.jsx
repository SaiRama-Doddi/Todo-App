function TodoFilter({ filter, setFilter }) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
          All
        </button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'} style={{ marginLeft: '5px' }}>
          Active
        </button>
        <button onClick={() => setFilter('inactive')} disabled={filter === 'inactive'} style={{ marginLeft: '5px' }}>
          Inactive
        </button>
      </div>
    );
  }
  
  export default TodoFilter;
  