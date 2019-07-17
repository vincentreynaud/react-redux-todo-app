import { combineReducers } from "redux";
import uuid from "uuid/v4";

import * as actions from "../actions/index";
import {
  Filters,
  TodoState,
  FilterState,
  HeadlineState,
  SetFilterAction,
  SetHeadlineAction,
  TodoActionTypes,
  SET_FILTER,
  SET_HEADLINE,
  ADD_TODO,
  UPDATE_TODO_TEXT,
  TOGGLE_TODO,
  REMOVE_TODO
} from "../types";

const initialTodoState: TodoState = {};
const initialFilterState: FilterState = actions.filters.ALL;
const initialHeadlineState: HeadlineState = "";

function headline(state = initialHeadlineState, action: SetHeadlineAction) {
  switch (action.type) {
    case SET_HEADLINE:
      return action.text;
    default:
      return state;
  }
}

function filter(state = initialFilterState, action: SetFilterAction) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoItems(
  state = initialTodoState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const id = uuid();
      return {
        ...state,
        [id]: {
          uuid: id,
          text: action.text,
          done: false
        }
      };

    case UPDATE_TODO_TEXT:
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          text: action.text
        }
      };

    case TOGGLE_TODO:
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          done: !state[action.uuid].done
        }
      };

    case REMOVE_TODO:
      let nextState = { ...state };
      delete nextState[action.uuid];
      return nextState;

    default:
      return state;
  }
}

const appReducer = combineReducers({
  todoItems,
  headline,
  filter
});
export default appReducer;
