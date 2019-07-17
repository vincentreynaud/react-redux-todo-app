export interface Filters {
  ALL: string;
  UNDONE: string;
  DONE: string;
}

export interface TodoItem {
  uuid: string;
  text: string;
  done: boolean;
}

export type HeadlineState = string;

export type FilterState = string;

export interface TodoState {
  [uuid: string]: TodoItem;
}

// Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_HEADLINE = "SET_HEADLINE";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export interface SetFilterAction {
  type: typeof SET_FILTER;
  filter: string;
}

// export type HeadlineActionTypes = SetHeadlineAction....
export interface SetHeadlineAction {
  type: typeof SET_HEADLINE;
  text: string;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

interface UpdateTodoTextAction {
  type: typeof UPDATE_TODO_TEXT;
  text: string;
  uuid: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  uuid: string;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  uuid: string;
}

export type TodoActionTypes =
  | AddTodoAction
  | UpdateTodoTextAction
  | ToggleTodoAction
  | RemoveTodoAction;
