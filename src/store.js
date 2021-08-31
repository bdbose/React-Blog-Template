import React, { createContext, useReducer } from 'react';

export const Context = createContext();

export const initialState = {
  user: {
    name: '',
    logged: false,
  },
};

export const Store = (props) => {
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: {
            name: 'Bidipto Bose',
            logged: true,
          },
        };
      default:
        return null;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
