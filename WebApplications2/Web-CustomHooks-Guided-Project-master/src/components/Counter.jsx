import React, { useState } from 'react';

export default function Counter({ user }) {
  const [count, setCount] = useState(0);

  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);

  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
