import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';

function sum<Type>(a:Type):Type {           //way to write generics
  return a
}
sum<number>(1)

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todo></Todo>
    </div>
  );
}

export default App;
