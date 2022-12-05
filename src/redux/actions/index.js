export const GET_JOBS = "GET_JOBS";

export const getJobsAction = (query) => {
  return async (dispatch) => {
    console.log("Fetching the books from the API...");
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        let fetchedJobs = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        });
        console.log(fetchedJobs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
