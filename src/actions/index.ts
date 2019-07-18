import {
  SetFilterAction,
  Filters,
  SetHeadlineAction,
  TodoActionTypes,
  SET_FILTER,
  SET_HEADLINE,
  ADD_TODO,
  UPDATE_TODO_TEXT,
  TOGGLE_TODO,
  REMOVE_TODO
} from "../types";

// Other constants
export const filters: Filters = {
  ALL: "all",
  UNDONE: "undone",
  DONE: "done"
};

// Action creators
export const setFilter = function(filter: string): SetFilterAction {
  return { type: SET_FILTER, filter };
};

export const setHeadline = function(text: string): SetHeadlineAction {
  return { type: SET_HEADLINE, text };
};

export const addTodo = function(text: string): TodoActionTypes {
  return { type: ADD_TODO, text };
};

export const updateTodoText = function(
  uuid: string,
  text: string
): TodoActionTypes {
  return { type: UPDATE_TODO_TEXT, text, uuid };
};

export const toggleTodo = function(uuid: string): TodoActionTypes {
  return { type: TOGGLE_TODO, uuid };
};

export const removeTodo = function(uuid: string): TodoActionTypes {
  return { type: REMOVE_TODO, uuid };
};
