import { useState, useMemo, useRef } from 'react';
import update from 'immutability-helper';

// Hook to operate on Todos with insert(), remove() and toggle().

const useTodos = () => {
  const counter = useRef(0),
    [todos, setTodos] = useState([]),
    { insert, remove, toggle } = useMemo(() => ({

      insert: ({ name, prio }) => {
        setTodos(items =>
          update(items, {
            $push: [{
              name, prio, 
              id: counter.current++,
              completed: false,
            }]
          })
          .sort((i1, i2) => {
            const a = i1.name.toUpperCase(),
              b = i2.name.toUpperCase();
            if (a === b) return 0;
            return a < b ? -1 : 1;
          })
        );
      },

      remove: index => {
        setTodos(items =>
          update(items,
            { $splice: [[index, 1]] }
          )
        );
      },

      toggle: index => {
        setTodos(items =>
          update(items, {
            [index]: {
              complete: {
                $apply: val => !val
              }
            }
          })
        );
      }

    }), [setTodos]);

  return { todos, insert, remove, toggle };
};

export default useTodos;