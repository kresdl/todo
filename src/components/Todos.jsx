import React from 'react';
import './Todos.scss';

// Extract and mutate items

function extract(extractor) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    const val = extractor(this[i], i, this);
    if (val) arr.push(val);
  }
  return arr;
}

// Convert CSS class object to string

const className = pairs =>
  Object.keys(pairs)
    .filter(key => pairs[key])
    .join(' ');
;

const Todos = ({ todos, toggle, remove, discard, completed = false }) => {

  const mouseDown = e => {
    if (e.target.tagName !== 'LI') return;
    const index = Number(e.target.dataset.index);
    discard ? remove(index) : toggle(index);
  },

    // Filter out complete/incomplete todos and preserve each item's index in reference list

    sel = extract.call(todos, (item, index) =>
      (!item.complete ^ completed) 
      && { ...item, index }
    ),

    // CSS class object

    mode = {
      half: true,
      discard: discard && sel.length,
      completed
    };

  return (
    <div className={className(mode)}>
      <h2>{completed ? 'Done' : 'To do'}</h2>
      <ul 
        className="items" 
        onMouseDown={mouseDown}>
        {
          sel.map(e => 
            <li 
              className={'prio-' + e.prio + ' item'}
              key={e.id}
              data-index={e.index} 
              type="button" >
              {e.name}
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Todos;