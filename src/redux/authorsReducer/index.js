import {
  SET_AUTHORS,
  SET_AUTHORS_RANKING,
  SET_SELECTED_AUTHOR,
} from "../../constants/ActionTypes";

const initialState = {
  authors: [],
  authorsRanking: [],
  selectedAuthor: null,
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS: {
      return { ...state, authors: action.payload };
    }
    case SET_AUTHORS_RANKING: {
      return { ...state, authorsRanking: action.payload };
    }
    case SET_SELECTED_AUTHOR: {
      return { ...state, selectedAuthor: action.payload };
    }
    default:
      return state;
  }
};

export default authorsReducer;
