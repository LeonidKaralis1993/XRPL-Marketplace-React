import { SET_NFTS, SET_MY_NFTS } from "../../../constants/ActionTypes";

export const setNfts = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_NFTS,
      payload: data,
    });
  };
};

export const setMynfts = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_MY_NFTS,
      payload: data,
    });
  };
};
