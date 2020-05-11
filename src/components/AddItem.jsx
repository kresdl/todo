import React, { useRef } from 'react';
import './AddItem.scss';

const AddItem = ({ insert, setDiscard }) => {
  const prio = useRef(3),

    discard = e => {
      e.stopPropagation();
      setDiscard(true);
    },

    // Submit-button onclick-handler, called before form submit-handler

    add = e => {
      prio.current = Number(e.target.dataset.prio);
    },

    // Form submit handler

    submit = e => {
      e.preventDefault();
      const em = e.target.elements.namedItem('todo');

      insert({
        name: em.value,
        prio: prio.current
      });

      em.value = "";
    };

  return (
    <form className="create" onSubmit={submit}>
      <input
        className="todo-input"
        required
        name="todo"
        placeholder="New todo"
        autoComplete="off"
        autoFocus={true} />
      <div className="buttons">
        {
          [3, 2, 1].map(n =>
            <button
              className={'btn prio-' + n}
              type="submit"
              key={n}
              data-prio={n}
              onClick={add} >
            </button>
          )
        }
        <button
          className="btn close"
          type="button"
          onClick={discard} >
          <span>
            &times;
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddItem;
