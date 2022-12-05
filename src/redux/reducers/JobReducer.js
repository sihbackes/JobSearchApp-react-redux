import { GET_JOBS } from "../actions";

const initialState = {
  stock: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
