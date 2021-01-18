import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto bg-red-100">
      <header>
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
}

export default App;
