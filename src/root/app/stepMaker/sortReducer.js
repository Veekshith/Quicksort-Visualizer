import { SORT_ACTION } from "../actions/types";

const initialState = { sortedList: [], steps: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case SORT_ACTION:
      return {
        ...state,
        sortedList: action.payload.sortedList,
        steps: action.payload.steps
      };

    default:
      return state;
  }
}
