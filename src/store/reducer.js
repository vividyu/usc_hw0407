export const initialState = {
    tasks: [],
    total: 0,
    nextId: 1,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        const newTasks = [...state.tasks, action.task];
        const newTotal = state.total + action.task.time;
        return { ...state, tasks: newTasks, total: newTotal, nextId: state.nextId + 1 };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  