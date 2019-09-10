import lodash from "lodash";
import Steps from './steps';
const stepInputBuilder = arr => {
  let elementState = {
    markInitial: true,
    markPivot: false,
    markSelected: false,
    markSorted: false,
    markLeftArrow: false,
    markRightArrow: false
  };
  let steps = Steps();
  let stepElementStates = [];
  arr.map((item, index) => {
    stepElementStates.push({ ...elementState });
  });
  const  formStep = (input) => {
    let stepInput = lodash.cloneDeep(input);
    let stepObj = {};
    let modifiedStepStates = stepElementStates;
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
    steps.add(stepObj);
  }

  const build = (input) => {
    let stepObj = {}, {name, changedElements, arr, uniqueKeys} = {...input};

    switch (name) {
      case "start": {
        stepObj.name =
          "Here is a visualization of the entire Quicksort process.";
        stepObj.changedElements = [];
        break;
      }

      case "sort_left_sublist": {
        stepObj.name = "Sorting left sublist";
        stepObj.changedElements = [];
        break;
      }

      case "sort_right_sublist": {
        stepObj.name = "Sorting right sublist";
        let i = changedElements[0];
        stepObj.changedElements = [];
        while (i > -1) {
          stepObj.changedElements.push({
            index: i--,
            changedStates: [{ name: "markSorted", value: true }]
          });
        }
        break;
      }

      case "select_pivot": {
        stepObj.name = "Select pivot";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [
              { name: "markPivot", value: true },
              { name: "markSorted", value: false }
            ]
          }
        ];
        break;
      }

      case "partitioning": {
        stepObj.name = "Partioning started";
        stepObj.changedElements = [];
        break;
      }

      case "select_left_pointer": {
        stepObj.name = "Select left pointer";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [{ name: "markLeftArrow", value: true }]
          }
        ];
        break;
      }

      case "select_right_pointer": {
        stepObj.name = "Select right pointer";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [{ name: "markRightArrow", value: true }]
          },
          {
            index: changedElements[1],
            changedStates: [{ name: "markRightArrow", value: false }]
          }
        ];
        break;
      }

      case "move_right_pointer": {
        stepObj.name = "Move right pointer";
        stepObj.changedElements = [
          {
            index: changedElements[0],
            changedStates: [{ name: "markRightArrow", value: true }]
          },
          {
            index: changedElements[1],
            changedStates: [{ name: "markRightArrow", value: false }]
          }
        ];
        break;
      }

      case "compare": {
        stepObj.name =
          "Compare until right pointer is less than pivot  then swap right and left  pointers";
        stepObj.changedElements = [];
        break;
      }

      case "right_pointer_less_than_pivot": {
        stepObj.name = "This is as far as it can go";
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
        break;
      }

      case "swap_right_and_left_pointers": {
        stepObj.name = "Swap the selected values";
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
        break;
    }
      case "move_left_pointer": {
        if (changedElements[0] < arr.length) {
          stepObj.name = "move left pointer";
          stepObj.changedElements = [
            {
              index: changedElements[0],
              changedStates: [{ name: "markLeftArrow", value: true }]
            },
            {
              index: changedElements[1],
              changedStates: [{ name: "markLeftArrow", value: false }]
            }
          ];
          
        }
        break;
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
        break;
      }

      case "move_pivot_to_its_final_position": {
        stepObj.name = "Move pivot to its final position";
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
        } else {
          stepObj.changedElements.push({
            index: changedElements[1],
            changedStates: [
              { name: "markLeftArrow", value: false },
              { name: "markRightArrow", value: false }
            ]
          });
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
        break;
      }
      default: {
      }
    }
    stepObj.uniqueKeys = [...uniqueKeys];
    stepObj.list = [...arr];
    formStep(stepObj);
  };

   const getSteps = () => {
    return steps.getSteps();
  };

  return {
    build,
    getSteps
  };
};
export default stepInputBuilder;

