// export interface Store {...};

// duplicate, find better solution
export const SET_FILTER = "SET_FILTER";
export const SET_HEADLINE = "SET_HEADLINE";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO_TEXT = "UPDATE_TODO_TEXT";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export interface Filters {
  ALL: string,
  UNDONE: string,
  DONE: string
}

export interface SetFilterAction {
  type: typeof SET_FILTER
  filter: string
}

export interface SetHeadlineAction {
  type: typeof SET_HEADLINE
  text: string
}

interface AddToDoAction {
  type: typeof ADD_TODO
  text: string
}

interface UpdateToDoTextAction {
  type: typeof UPDATE_TODO_TEXT
  text: string
  uuid: string
}

interface ToggleToDoAction {
  type: typeof TOGGLE_TODO
  uuid: string
}

interface RemoveToDoAction {
  type: typeof REMOVE_TODO
  uuid: string
}

export type ToDoActionTypes = AddToDoAction | UpdateToDoTextAction | ToggleToDoAction | RemoveToDoAction
