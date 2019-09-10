import mockSteps from "./mockSteps";
import StepInputBuilder from './stepInputBuilder';
import UniqueKeysBuilder from './uniqueKeyBuilder';
import lodash from "lodash";
import stepInputBuilder from "./stepInputBuilder";

describe("StepInputBuilder", () => {
    let uniqueKeyBuilder = UniqueKeysBuilder();
    let arr = [5,4,3,7,8];
    let stepBuilder = StepInputBuilder(arr);
    uniqueKeyBuilder.initialize();
    uniqueKeyBuilder.build(arr);
    let uniqueKeys = uniqueKeyBuilder.getUniqueKeys(), leftSublistSorting = false,
    rightSublistSorting = false;

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
    
      stepBuilder.build({
        name: "start",
        changedElements: null,
        arr,
        uniqueKeys
      });
      quickSort(arr, 0, arr.length-1, "main");
      stepBuilder.build({ name: "end", changedElements: null, arr, uniqueKeys });


  describe('build method should process all the steps as per the quicksort algo input', () => {
      let expected, actual, result;
      const validateStep = (index) => {
        expected = mockSteps[index];
        actual = stepBuilder.getSteps()[index];
        return lodash.isEqual(expected, actual)
      } 
    test('step: start', () => {
       expect(validateStep(0)).toEqual(true);
    });
    test('step: select_pivot', () => {
        expect(validateStep(1)).toEqual(true);
     });
     test('step: partitioning', () => {
        expect(validateStep(2)).toEqual(true);
     });
     test('step: select_left_pointer', () => {
        expect(validateStep(3)).toEqual(true);
     });
     test('step: select_right_pointer', () => {
        expect(validateStep(4)).toEqual(true);
     });
     test('step: compare', () => {
        expect(validateStep(5)).toEqual(true);
     });
     test('step: right_pointer_less_than_pivot', () => {
        expect(validateStep(6)).toEqual(true);
     });
     test('step: swap_right_and_left_pointers', () => {
        expect(validateStep(7)).toEqual(true);
     });
     test('step: move_left_pointer', () => {
        expect(validateStep(8)).toEqual(true);
     });
     test('step: move_right_pointer', () => {
        expect(validateStep(9)).toEqual(true);
     });
     test('step: right_pointer_reached_the_end', () => {
        expect(validateStep(18)).toEqual(true);
     });
     test('step: move_pivot_to_its_final_position', () => {
        expect(validateStep(19)).toEqual(true);
     });
     test('step: sort_left_sublist', () => {
        expect(validateStep(20)).toEqual(true);
     });

     test('step: sort_right_sublist', () => {
        expect(validateStep(28)).toEqual(true);
     });
     test('step: end', () => {
        expect(validateStep(36)).toEqual(true);
     });
  })

  test("getSteps method should return all the steps built", () => {
    let steps = stepBuilder.getSteps();
    let result = lodash.isEqual(steps, mockSteps);
    expect(result).toEqual(true);
  });
});
