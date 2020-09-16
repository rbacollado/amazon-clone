import React, { createContext, useContext, useReducer } from "react";

/* prepares the data layer*/
export const StateContext = createContext();

/* */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/* pull info from the data layer */
export const useStateValue = () => useContext(StateContext);
