import { STEPS_ACTION } from "./types";

const steps = arr => dispatch => {
  dispatch({
    type: STEPS_ACTION,
    payload: arr
  });
};

export default steps;
