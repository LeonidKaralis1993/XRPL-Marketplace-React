import {
  SET_AUTHORS,
  SET_AUTHORS_RANKING,
  SET_SELECTED_AUTHOR,
} from "../../../constants/ActionTypes";

export const setAuthors = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_AUTHORS,
      payload: data,
    });
  };
};

export const setAuthorsRankings = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_AUTHORS_RANKING,
      payload: data,
    });
  };
};
export const onAuthorSelect = (author) => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_AUTHOR,
      payload: author,
    });
  };
};
