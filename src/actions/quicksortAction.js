import Steps from "./stepsAction";
import stepInputBuilder from "../utilities/stepInputBuilder";

let uniqueKeys = [];
let stepBuilder;
let leftSublistSorting = false,
  rightSublistSorting = false;
const quickSortList = arr => dispatch => {
  uniqueKeys = [];
  arr.map((item, index) => {
    uniqueKeys.push(index);
  });
  stepBuilder = stepInputBuilder(arr);
  stepBuilder.build("start", null, arr, uniqueKeys);

  quickSort(arr, 0, arr.length - 1);

  stepBuilder.build("end", null, arr, uniqueKeys);

  dispatch(Steps(stepBuilder.getSteps()));
};

const quickSort = (arr, start, end, side) => {
  if (start < end) {
    let pivot_pos = partition(arr, start, end, side);
    quickSort(arr, start, pivot_pos - 1, "left");
    quickSort(arr, pivot_pos + 1, end, "right");
  }
};
const partition = (arr, start, end, side = "main") => {
  let rightPointerPosition;
  if (side === "left" && !leftSublistSorting) {
    stepBuilder.build("sort_left_sublist", null, arr, uniqueKeys);
    leftSublistSorting = true;
  }
  if (side === "right" && !rightSublistSorting) {
    stepBuilder.build("sort_right_sublist", start, arr, uniqueKeys);
    rightSublistSorting = true;
  }

  let pivot = arr[start];

  stepBuilder.build("select_pivot", start, arr, uniqueKeys);

  stepBuilder.build("partitioning", null, arr, uniqueKeys);

  let i = start + 1;

  stepBuilder.build("select_left_pointer", i, arr, uniqueKeys);

  for (let j = start + 1; j <= end; j++) {
    rightPointerPosition = j;
    if (j === start + 1) {
      stepBuilder.build("select_right_pointer", j, arr, uniqueKeys);
    } else {
      stepBuilder.build("move_right_pointer", j, arr, uniqueKeys);
    }

    stepBuilder.build("compare", null, arr, uniqueKeys);

    if (arr[j] < pivot) {
      stepBuilder.build(
        "right_pointer_less_than_pivot",
        [i, j],
        arr,
        uniqueKeys
      );

      swap(arr, i, j);

      stepBuilder.build(
        "swap_right_and_left_pointers",
        [i, j],
        arr,
        uniqueKeys
      );

      i += 1;

      if (i < arr.length) {
        stepBuilder.build("move_left_pointer", i, arr, uniqueKeys);
      }
    }
  }

  stepBuilder.build(
    "right_pointer_reached_the_end",
    [start, i - 1],
    arr,
    uniqueKeys
  );

  swap(arr, start, i - 1);

  stepBuilder.build(
    "move_pivot_to_its_final_position",
    [start, i - 1, rightPointerPosition],
    arr,
    uniqueKeys
  );

  return i - 1;
};
const swap = (arr, a, b) => {
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;

  t = uniqueKeys[a];
  uniqueKeys[a] = uniqueKeys[b];
  uniqueKeys[b] = t;
};

export default quickSortList;
