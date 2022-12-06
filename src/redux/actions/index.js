export const GET_JOBS = "GET_JOBS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

export const addToFavoritesAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
};

export const removeFromFavoritesAction = (i) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: i,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_BOOKS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");
        dispatch({
          type: GET_BOOKS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_BOOKS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_BOOKS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_BOOKS_ERROR,
        payload: true,
      });
    }
  };
};
