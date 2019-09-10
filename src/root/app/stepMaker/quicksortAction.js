import Steps from "./stepsAction";
import QuickSorter from "./quicksorter";
const quickSortList = arr => dispatch => {
  let quickSorter = QuickSorter();
  quickSorter.sort(arr, 0, arr.length - 1);
  dispatch(Steps(quickSorter.getSteps()));
};

export default quickSortList;
