import { SetFilterAction, Filters, SetHeadlineAction, ToDoActionTypes } from '../types/index'

export const filters: Filters = {
  ALL: "all",
  UNDONE: "undone",
  DONE: "done"
};

// Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_HEADLINE = "SET_HEADLINE";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

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


