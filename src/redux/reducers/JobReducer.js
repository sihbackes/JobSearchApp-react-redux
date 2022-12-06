import { GET_JOBS, GET_BOOKS_LOADING, GET_BOOKS_ERROR } from "../actions";

const initialState = {
  jobList: [],
  isLoading: true,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobList: action.payload,
      };
    case GET_BOOKS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // isLoading: !state.isLoading, this is an example for making this
        // work without an explicit payload for the action of type GET_BOOKS_LOADING
      };

    case GET_BOOKS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
