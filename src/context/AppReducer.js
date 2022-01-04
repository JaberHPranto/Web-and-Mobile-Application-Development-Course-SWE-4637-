export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMER":
      return {
        ...state,
        timers: [action.payload, ...state.timers],
      };
    case "DELETE_TIMER":
      return {
        ...state,
        timers: state.timers.filter((timer) => timer.id !== action.payload),
      };
    case "EDIT_TIMER":
      return {
        ...state,
        timers: state.timers.map((timer) => {
          if (timer.id === action.payload.id) return action.payload;
          else return timer;
        }),
      };

    default:
      return state;
  }
};
