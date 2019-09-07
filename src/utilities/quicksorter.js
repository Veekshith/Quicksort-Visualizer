import lodash from "lodash";
import ElementStateBuilder from "./elementStateBuilder";
import StepElementStatesBuilder from "./stepElementStatesBuilder";
import UniqueKeysBuilder from "./uniqueKeyBuilder";
import Steps from "./steps";
import ChangedElementBuilder from "./changedElementBuilder";
import ChangedStateBuilder from "./changedStateBuilder";
let uniqueKeyBuilder = UniqueKeysBuilder();
let elementStateBuilder = ElementStateBuilder();
let stepElementStatesBuilder = StepElementStatesBuilder();
let changedElementBuilder = ChangedElementBuilder();
let changedStateBuilder = ChangedStateBuilder();
let steps = Steps();

let stepElementStates,
  uniqueKeys,
  inputArray,
  leftSublistSorting,
  rightSublistSorting;

const quickSorter = () => {
  steps.initialize();
  leftSublistSorting = false;
  rightSublistSorting = false;
  return {
    sort
  };
};

const sort = (arr, start, end, side) => {
  elementStateBuilder.initialize();
  stepElementStatesBuilder.initialize();
  inputArray = arr;
  uniqueKeyBuilder.initialize();
  uniqueKeyBuilder.build(arr);
  uniqueKeys = uniqueKeyBuilder.getUniqueKeys();
  elementStateBuilder.build("markInitial", true);
  elementStateBuilder.build("markPivot", false);
  elementStateBuilder.build("markSelected", false);
  elementStateBuilder.build("markSorted", false);
  elementStateBuilder.build("markLeftArrow", false);
  elementStateBuilder.build("markRightArrow", false);

  let elementStates = elementStateBuilder.getElementStates();

  arr.map(() => stepElementStatesBuilder.build(elementStates));
  stepElementStates = stepElementStatesBuilder.getStepElementStates();

  build({
    name: "Here is a visualization of the entire Quicksort process.",
    changedElements: []
  });
  quickSort(arr, start, end, side);

  changedElementBuilder.initialize();

  arr.map((item, index) => {
    changedStateBuilder.initialize();
    changedStateBuilder.build("markSorted", true);
    changedElementBuilder.build(index, changedStateBuilder.getChangedStates());
  });
  build({
    name: "Sorting Complete!!",
    changedElements: lodash.cloneDeep(
      changedElementBuilder.getChangedElements()
    )
  });
  return steps.getSteps();
};

const build = input => {
  let stepInput = lodash.cloneDeep(input);
  let modifiedStepStates = stepElementStates;
  if (stepInput.changedElements.length) {
    stepInput.changedElements.map(ele => {
      ele.changedStates.map(state => {
        modifiedStepStates[ele.index][state.name] = state.value;
      });
    });
  }
  stepInput.elementStates = lodash.cloneDeep(modifiedStepStates);
  stepInput.listGlance = [...inputArray];
  stepInput.uniqueKeys = [...uniqueKeys];
  steps.add(stepInput);
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
    build({
      name: "Sorting left sublist",
      changedElements: []
    });
    leftSublistSorting = true;
  }
  if (side === "right" && !rightSublistSorting) {
    let i = start;
    changedElementBuilder.initialize();
    while (i < -1) {
      changedStateBuilder.initialize();
      changedStateBuilder.build("markSorted", true);
      changedElementBuilder.build(i--, changedStateBuilder.getChangedStates());
    }

    build({
      name: "Sorting right sublist",
      changedElements: lodash.cloneDeep(
        changedElementBuilder.getChangedElements()
      )
    });
    rightSublistSorting = true;
  }

  let pivot = arr[start];

  changedStateBuilder.initialize();
  changedElementBuilder.initialize();
  changedStateBuilder.build("markPivot", true);
  changedStateBuilder.build("markSorted", false);
  changedElementBuilder.build(start, changedStateBuilder.getChangedStates());

  build({
    name: "Select Pivot",
    changedElements: lodash.cloneDeep(
      changedElementBuilder.getChangedElements()
    )
  });

  build({
    name: "Partitioning Started",
    changedElements: []
  });

  let i = start + 1;
  changedStateBuilder.initialize();
  changedElementBuilder.initialize();
  changedStateBuilder.build("markLeftArrow", true);
  changedElementBuilder.build(i, changedStateBuilder.getChangedStates());
  build({
    name: "Select left pointer",
    changedElements: lodash.cloneDeep(
      changedElementBuilder.getChangedElements()
    )
  });

  for (let j = start + 1; j <= end; j++) {
    rightPointerPosition = j;

    changedStateBuilder.initialize();
    changedElementBuilder.initialize();
    changedStateBuilder.build("markRightArrow", true);
    changedElementBuilder.build(j, changedStateBuilder.getChangedStates());

    changedStateBuilder.initialize();
    changedStateBuilder.build("markRightArrow", false);
    changedElementBuilder.build(j - 1, changedStateBuilder.getChangedStates());

    if (j === start + 1) {
      build({
        name: "Select right pointer",
        changedElements: lodash.cloneDeep(
          changedElementBuilder.getChangedElements()
        )
      });
    } else {
      build({
        name: "Move right pointer",
        changedElements: lodash.cloneDeep(
          changedElementBuilder.getChangedElements()
        )
      });
    }

    build({
      name:
        "compare until right pointer is less than pivot  then swap right and left  pointers",
      changedElements: []
    });

    if (arr[j] < pivot) {
      changedStateBuilder.initialize();
      changedElementBuilder.initialize();
      changedStateBuilder.build("markSelected", true);
      changedElementBuilder.build(i, changedStateBuilder.getChangedStates());
      changedElementBuilder.build(j, changedStateBuilder.getChangedStates());

      build({
        name: "this is as far as it can go",
        changedElements: lodash.cloneDeep(
          changedElementBuilder.getChangedElements()
        )
      });

      swap(arr, i, j);

      changedStateBuilder.initialize();
      changedElementBuilder.initialize();
      changedStateBuilder.build("markSelected", false);
      changedStateBuilder.build("markInitial", true);

      changedElementBuilder.build(i, changedStateBuilder.getChangedStates());
      changedElementBuilder.build(j, changedStateBuilder.getChangedStates());

      build({
        name: "Swap the selected values",
        changedElements: lodash.cloneDeep(
          changedElementBuilder.getChangedElements()
        )
      });

      i += 1;

      if (i < arr.length) {
        changedStateBuilder.initialize();
        changedElementBuilder.initialize();
        changedStateBuilder.build("markLeftArrow", false);
        changedElementBuilder.build(
          i - 1,
          changedStateBuilder.getChangedStates()
        );
        changedStateBuilder.initialize();
        changedStateBuilder.build("markLeftArrow", true);
        changedElementBuilder.build(i, changedStateBuilder.getChangedStates());
        build({
          name: "Move left pointer",
          changedElements: lodash.cloneDeep(
            changedElementBuilder.getChangedElements()
          )
        });
      }
    }
  }

  changedStateBuilder.initialize();
  changedElementBuilder.initialize();
  changedStateBuilder.build("markPivot", false);
  changedStateBuilder.build("markSelected", true);
  changedElementBuilder.build(start, changedStateBuilder.getChangedStates());
  changedStateBuilder.initialize();
  changedStateBuilder.build("markSelected", true);
  changedElementBuilder.build(i - 1, changedStateBuilder.getChangedStates());
  build({
    name: "Right pointer reached the end, this is as far it can go",
    changedElements: lodash.cloneDeep(
      changedElementBuilder.getChangedElements()
    )
  });

  swap(arr, start, i - 1);

  changedStateBuilder.initialize();
  changedElementBuilder.initialize();

  changedStateBuilder.build("markSelected", false);
  changedStateBuilder.build("markInitial", true);

  changedElementBuilder.build(start, changedStateBuilder.getChangedStates());

  changedStateBuilder.initialize();

  changedStateBuilder.build("markSorted", true);
  changedStateBuilder.build("Selected", false);

  changedElementBuilder.build(i - 1, changedStateBuilder.getChangedStates());

  changedStateBuilder.initialize();

  changedStateBuilder.build("markLeftArrow", false);
  changedStateBuilder.build("markRightArrow", false);

  changedElementBuilder.build(
    rightPointerPosition,
    changedStateBuilder.getChangedStates()
  );

  if (i < arr.length) {
    changedElementBuilder.build(i, changedStateBuilder.getChangedStates());
  } else {
    changedElementBuilder.build(i - 1, changedStateBuilder.getChangedStates());
  }

  build({
    name: "Move the pivot to its final position",
    changedElements: lodash.cloneDeep(
      changedElementBuilder.getChangedElements()
    )
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

export default quickSorter;
