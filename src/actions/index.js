const fecha = moment().format("YYYY-MM-DD");

export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (repos) => ({
  type: "LOADING_SUCCESS",
  repos
});

export const clearRepos = () => ({
  type: "CLEAR_REPOS"
});

export const getHomeNews = () => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/${fecha}?page=1`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getNews = (category) => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/news/category/${category}?page=1`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const searchNews = (word) => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/search/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => response.slice(0, 10))
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getRepos = (username) => {
  return (dispatch) => {
    dispatch(clearRepos());

    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((repos) => dispatch(loadingSuccess(repos)))
      .catch(() => dispatch(loadingError(true)));
  };
};
