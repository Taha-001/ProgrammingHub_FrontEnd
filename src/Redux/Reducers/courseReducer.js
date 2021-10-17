import * as types from "../Action/actionTypes";

const initialState = {
  showModal: false,
  heading: "",
  items: [],
  courseType: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showModalHandler:
      return {
        ...state,
        showModal: !state.showModal,
      };
      break;
      default:
          return state;
  }
};
export default courseReducer;