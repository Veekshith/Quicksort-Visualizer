import StepInputBuilder from "./stepInputBuilder";
import UniqueKeysBuilder from "./uniqueKeyBuilder";

const quickSorter = () => {
  let uniqueKeys,
    stepBuilder,
    leftSublistSorting = false,
    rightSublistSorting = false;
   
  const getSteps = () => stepBuilder.getSteps();

  const sort = (arr, start, end, side) => {
    let uniqueKeyBuilder = UniqueKeysBuilder();
    stepBuilder = StepInputBuilder(arr);
    uniqueKeyBuilder.initialize();
    uniqueKeyBuilder.build(arr);
    uniqueKeys = uniqueKeyBuilder.getUniqueKeys();

    stepBuilder.build({
      name: "start",
      changedElements: null,
      arr,
      uniqueKeys
    });
    quickSort(arr, start, end, side);
    stepBuilder.build({ name: "end", changedElements: null, arr, uniqueKeys });
    return arr;
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
      stepBuilder.build({
        name: "sort_left_sublist",
        changedElements: null,
        arr,
        uniqueKeys
      });
      leftSublistSorting = true;
    }
    if (side === "right" && !rightSublistSorting) {
      stepBuilder.build({
        name: "sort_right_sublist",
        changedElements: [start],
        arr,
        uniqueKeys
      });
      rightSublistSorting = true;
    }

    let pivot = arr[start];
    stepBuilder.build({
      name: "select_pivot",
      changedElements: [start],
      arr,
      uniqueKeys
    });

    stepBuilder.build({
      name: "partitioning",
      changedElements: null,
      arr,
      uniqueKeys
    });

    let i = start + 1;
    stepBuilder.build({
      name: "select_left_pointer",
      changedElements: [i],
      arr,
      uniqueKeys
    });

    for (let j = start + 1; j <= end; j++) {
      rightPointerPosition = j;
      let name;
      if (j === start + 1) {
        name = "select_right_pointer";
      } else {
        name = "move_right_pointer";
      }
      stepBuilder.build({ name, changedElements: [j, j - 1], arr, uniqueKeys });

      stepBuilder.build({
        name: "compare",
        changedElements: null,
        arr,
        uniqueKeys
      });

      if (arr[j] < pivot) {
        stepBuilder.build({
          name: "right_pointer_less_than_pivot",
          changedElements: [i, j],
          arr,
          uniqueKeys
        });

        swap(arr, i, j);

        stepBuilder.build({
          name: "swap_right_and_left_pointers",
          changedElements: [i, j],
          arr,
          uniqueKeys
        });

        i += 1;

        if (i < arr.length) {
          stepBuilder.build({
            name: "move_left_pointer",
            changedElements: [i, i - 1],
            arr,
            uniqueKeys
          });
        }
      }
    }

    stepBuilder.build({
      name: "right_pointer_reached_the_end",
      changedElements: [start, i - 1],
      arr,
      uniqueKeys
    });

    swap(arr, start, i - 1);

    stepBuilder.build({
      name: "move_pivot_to_its_final_position",
      changedElements: [start, i - 1, rightPointerPosition],
      arr,
      uniqueKeys
    });

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

  return {
    sort,
    getSteps
  };
};

export default quickSorter;
