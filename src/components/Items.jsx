import React from 'react';
import Todos from './Todos.jsx';
import './Items.scss';

const Items = props => {
  return (
    <section className="split">
      <Todos {...props} />
      <Todos {...props} completed />
    </section>
  )
};

export default Items;
