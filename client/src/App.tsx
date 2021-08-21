import React, { useEffect, useState } from 'react';

function wasm() {
  return import('wasm');
}

function App() {
  const [input, setInput] = useState('<enter your name>');
  const [greeting, setGreeting] = useState('');

  const handleInput = (e: React.FormEvent<HTMLInputElement> ) => {
    setInput(e.currentTarget.value); 
  }

  useEffect(() => {
    wasm().then(({ create_greeting }) => {
      setGreeting(create_greeting(input));
    })
  }, [input, setGreeting]);

  return (
    <div style={{ margin: '2rem'}}>
      <h1>{greeting}</h1>
      <input onChange={handleInput} />
    </div>
  )
}

export default App;
