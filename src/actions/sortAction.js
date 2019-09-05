import quickSortList from "./quicksortAction";

const sortList = arr => dispatch => {
  dispatch(quickSortList([...arr]));
};

export default sortList;
