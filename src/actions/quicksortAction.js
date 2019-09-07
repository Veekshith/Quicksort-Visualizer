import Steps from "./stepsAction";
import QuickSorter from '../utilities/quicksorter';


const quickSortList = arr => dispatch => {
  let quickSorter = QuickSorter();
  let steps = quickSorter.sort(arr, 0, arr.length-1);
  dispatch(Steps(steps));
};

export default quickSortList;