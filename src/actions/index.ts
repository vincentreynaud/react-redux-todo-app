import { SET_FILTER, SET_HEADLINE, ADD_TODO, UPDATE_TODO_TEXT, TOGGLE_TODO, REMOVE_TODO, SetFilterAction, Filters, SetHeadlineAction, ToDoActionTypes } from './types'


export const filters: Filters = {
  ALL: "all",
  UNDONE: "undone",
  DONE: "done"
};

// Action creators
export const setFilter = function (filter: string): SetFilterAction {
  return { type: SET_FILTER, filter }
}

export const setHeadline = function (text: string): SetHeadlineAction {
  return { type: SET_HEADLINE, text }
}

export const addToDo = function (text: string): ToDoActionTypes {
  return { type: ADD_TODO, text };
};

export const updateToDoText = function (uuid: string, text: string): ToDoActionTypes {
  return { type: UPDATE_TODO_TEXT, text, uuid };
};

export const toggleToDo = function (uuid: string): ToDoActionTypes {
  return { type: TOGGLE_TODO, uuid };
};

export const removeToDo = function (uuid: string): ToDoActionTypes {
  return { type: REMOVE_TODO, uuid };
};


