export const taskReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          ...action,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return state.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error(`This ${action.type} action is unknown action`);
    }
  }
};
