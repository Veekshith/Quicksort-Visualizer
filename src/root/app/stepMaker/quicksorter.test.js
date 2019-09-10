import QuickSorter from "./quicksorter";
import lodash from "lodash";
import mockSteps from "./mockSteps";

describe('QuickSorter', ()=> {
  let quicksorter = QuickSorter();
  test("sort method should return sorted array", () => {
    let arr =[5,4,3,7,8], expected = [3,4,5,7,8];
    let actual = quicksorter.sort(arr, 0, 4);
    let result = lodash.isEqual(actual, expected);
    expect(result).toEqual(true);
  });

  test("getSteps method should return all the steps", () => {
    let expected = mockSteps;
    let actual = quicksorter.getSteps();
    let result = lodash.isEqual(actual, expected);
    expect(result).toEqual(true);
  })

});

