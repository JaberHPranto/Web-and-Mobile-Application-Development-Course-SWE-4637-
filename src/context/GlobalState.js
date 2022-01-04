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
  const deleteTimer = (id) => {
    dispatch({
      type: "DELETE_TIMER",
      payload: id,
    });
  };
  const editTimer = (timer) => {
    dispatch({
      type: "EDIT_TIMER",
      payload: timer,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        timers: state.timers,
        addTimer,
        deleteTimer,
        editTimer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
