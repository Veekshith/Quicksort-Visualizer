import lodash from "lodash";

const stepInputBuilder = arr => {
  let elementState = {
    markInitial: true,
    markPivot: false,
    markSelected: false,
    markSorted: false,
    markLeftArrow: false,
    markRightArrow: false
  };
  let defaultStepStates = [];
  arr.map((item, index) => {
    defaultStepStates.push({ ...elementState });
  });
  let steps = [];

  const build = (name, changedElements, arr, uniqueKeys) => {
    let stepObj = {};
    switch (name) {
      case "start": {
        stepObj.name =
          "Here is a visualization of the entire Quicksort process.";
        stepObj.changedElements = [];
        stepObj.list = [...arr];
        stepObj.uniqueKeys = [...uniqueKeys];
        formStep(stepObj);
        break;
      }

      case "sort_left_sublist": {
        stepObj.name = "Sorting left sublist";
        stepObj.changedElements = [];
        stepObj.list = [...arr];
        stepObj.uniqueKeys = [...uniqueKeys];
        formStep(stepObj);
        break;
      }

      case "sort_right_sublist": {
        stepObj.name = "Sorting right sublist";
        let i = changedElements;
        stepObj.changedElements = [];
        while (i > -1) {
          stepObj.changedElements.push({
            index: i--,
            changedStates: [{ name: "markSorted", value: true }]
          });
        }
        stepObj.list = [...arr];
        stepObj.uniqueKeys = [...uniqueKeys];
        formStep(stepObj);
        break;
      }

      case "select_pivot": {
        stepObj.name = "Select pivot";
        stepObj.changedElements = [
          {
            index: changedElements,
            changedStates: [
              { name: "markPivot", value: true },
              { name: "markSorted", value: false }
            ]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "partitioning": {
        stepObj.name = "Partioning started";
        stepObj.changedElements = [];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "select_left_pointer": {
        stepObj.name = "Select left pointer";
        stepObj.changedElements = [
          {
            index: changedElements,
            changedStates: [{ name: "markLeftArrow", value: true }]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "select_right_pointer": {
        stepObj.name = "Select right pointer";
        stepObj.changedElements = [
          {
            index: changedElements,
            changedStates: [{ name: "markRightArrow", value: true }]
          },
          {
            index: changedElements - 1,
            changedStates: [{ name: "markRightArrow", value: false }]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "move_right_pointer": {
        stepObj.name = "Move right pointer";
        stepObj.changedElements = [
          {
            index: changedElements,
            changedStates: [{ name: "markRightArrow", value: true }]
          },
          {
            index: changedElements - 1,
            changedStates: [{ name: "markRightArrow", value: false }]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "compare": {
        stepObj.name =
          "compare until right pointer is less than pivot  then swap right and left  pointers";
        stepObj.changedElements = [];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "right_pointer_less_than_pivot": {
        stepObj.name = "this is as far as it can go";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [{ name: "markSelected", value: true }]
          },
          {
            index: changedElements[1],
            changedStates: [{ name: "markSelected", value: true }]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "swap_right_and_left_pointers":
        stepObj.name = "swap the selected values";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [
              { name: "markSelected", value: false },
              { name: "markInitial", value: true }
            ]
          },
          {
            index: changedElements[1],
            changedStates: [
              { name: "markSelected", value: false },
              { name: "markInitial", value: true }
            ]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;

      case "move_left_pointer": {
        if (changedElements < arr.length) {
          stepObj.name = "move left pointer";
          stepObj.changedElements = [
            {
              index: changedElements,
              changedStates: [{ name: "markLeftArrow", value: true }]
            },
            {
              index: changedElements - 1,
              changedStates: [{ name: "markLeftArrow", value: false }]
            }
          ];
          stepObj.uniqueKeys = [...uniqueKeys];
          stepObj.list = [...arr];
          formStep(stepObj);
          break;
        }
      }

      case "right_pointer_reached_the_end": {
        stepObj.name =
          "Right pointer reached the end, this is as far it can go";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [
              { name: "markPivot", value: false },
              { name: "markSelected", value: true }
            ]
          },
          {
            index: changedElements[1],
            changedStates: [{ name: "markSelected", value: true }]
          }
        ];
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }

      case "move_pivot_to_its_final_position": {
        stepObj.name = "swap the selected values";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [
              { name: "markSelected", value: false },
              { name: "markInitial", value: true }
            ]
          },
          {
            index: changedElements[1],
            changedStates: [
              { name: "markSorted", value: true },
              { name: "markSelected", value: false }
            ]
          },
          {
            index: changedElements[2],
            changedStates: [
              { name: "markLeftArrow", value: false },
              { name: "markRightArrow", value: false }
            ]
          }
        ];
        if (changedElements[1] + 1 < arr.length) {
          stepObj.changedElements.push({
            index: changedElements[1] + 1,
            changedStates: [
              { name: "markLeftArrow", value: false },
              { name: "markRightArrow", value: false }
            ]
          });
          stepObj.uniqueKeys = [...uniqueKeys];
          stepObj.list = [...arr];
          formStep(stepObj);
        } else {
          stepObj.changedElements.push({
            index: changedElements[1],
            changedStates: [
              { name: "markLeftArrow", value: false },
              { name: "markRightArrow", value: false }
            ]
          });
          stepObj.uniqueKeys = [...uniqueKeys];
          stepObj.list = [...arr];
          formStep(stepObj);
        }
        break;
      }
      case "end": {
        stepObj.name = "Sorting Complete!!";
        stepObj.changedElements = [];
        arr.map((item, index) => {
          stepObj.changedElements.push({
            index: index,
            changedStates: [{ name: "markSorted", value: true }]
          });
        });
        stepObj.uniqueKeys = [...uniqueKeys];
        stepObj.list = [...arr];
        formStep(stepObj);
        break;
      }
      default: {
      }
    }
    function formStep(input) {
      let stepInput = lodash.cloneDeep(input);
      let stepObj = {};
      let modifiedStepStates = defaultStepStates;
      if (stepInput.changedElements.length) {
        stepInput.changedElements.map(ele => {
          ele.changedStates.map(state => {
            modifiedStepStates[ele.index][state.name] = state.value;
          });
        });
      }
      stepObj.name = stepInput.name;
      stepObj.elementStates = lodash.cloneDeep(modifiedStepStates);
      stepObj.listGlance = stepInput.list;
      stepObj.uniqueKeys = stepInput.uniqueKeys;

      steps.push(stepObj);
    }
  };
  const getSteps = () => {
    return steps;
  };

  return {
    build,
    getSteps
  };
};
export default stepInputBuilder;
