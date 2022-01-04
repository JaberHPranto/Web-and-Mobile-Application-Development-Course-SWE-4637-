export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [action.payload, ...state.timers],
      };

    default:
      return state;
  }
};
