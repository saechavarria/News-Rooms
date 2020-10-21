import { combineReducers } from "redux";

const loadingError = (state = false, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return action.hasErrored;
    default:
      return state;
  }
};

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case "LOADING_IN_PROGRESS":
      return action.isLoading;
    default:
      return state;
  }
};

const repos = (state = [], action) => {
  switch (action.type) {
    case "LOADING_SUCCESS":
      return action.repos;
    case "CLEAR_REPOS":
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  repos,
  loadingError,
  loadingInProgress
});
