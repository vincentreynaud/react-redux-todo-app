import { combineReducers } from "redux";
import * as actions from "../actions/index";
import uuid from "uuid/v4";


// const initialState = {
//   headerTagline: "My ToDo List",
//   filter: "undone",
//   todoItems: {}
// }

function filter(state = actions.filters.ALL, action) {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function toDoItems(state = {}, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      const id = uuid();
      return {
        ...state,
        [id]: {
          uuid: id,
          text: action.text,
          done: false
        }
      };

    case actions.UPDATE_TODO_TEXT:
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          text: action.text
        }
      }

    default:
      return state;
  }
}

const appReducer = combineReducers({
  toDoItems,
  filter
})
export default appReducer;