import React, { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";

const initialState = {
  timers: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const addTimer = (timer) => {
    dispatch({
      type: "ADD_TIMER",
      payload: timer,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        timers: state.timers,
        addTimer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
