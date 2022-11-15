import { useCallback, useState } from "react";

import Child from "./components/Child";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, SetValue] = useState("");

  const updateCount = useCallback(() => setCount(count + 1), [count]);
  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <input value={value} onChange={(e) => SetValue(e.target.value)} />
      <Child count={count} updateCount={updateCount} />
    </div>
  );
}

export default App;
