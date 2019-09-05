import { STEPS_ACTION } from "../actions/types";

const initialState = { steps: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case STEPS_ACTION:
      return {
        ...state,
        steps: action.payload
      };

    default:
      return state;
  }
}
