//ActionTypes
export const SET_FILTER = "SET_FILTER";
export const filters = {
  ALL: "all",
  UNDONE: "undone",
  DONE: "done"
};

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


// Action creators
export const setFilter = filter => {
  return { type: SET_FILTER, filter }
}

export const addToDo = text => {
  return { type: ADD_TODO, text };
};

export const updateToDoText = (uuid, text) => {
  return { type: UPDATE_TODO_TEXT, text, uuid };
};

export const toggleToDo = uuid => {
  return { type: TOGGLE_TODO, uuid };
};

export const removeToDo = uuid => {
  return { type: REMOVE_TODO, uuid };
};


