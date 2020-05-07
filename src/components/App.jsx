import React, { useState } from 'react';
import AddItem from './AddItem.jsx';
import Items from './Items.jsx';
import useTodos from '../useTodos';
import './App.scss';

function date() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const App = () => {
  const [discard, setDiscard] = useState(),
    { todos, insert, remove, toggle } = useTodos(),
    cancel = () => setDiscard(false);
  
  return (
    <div className="wrapper" onClick={cancel}>
      <header>
        <h1>
          {date()}
        </h1>
      </header>
      <main>
        <AddItem {...{ insert, setDiscard }} />
        <Items {...{ todos, toggle, remove, discard }} />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
