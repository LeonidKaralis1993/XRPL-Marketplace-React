import { SET_NFTS, SET_MY_NFTS } from "../../constants/ActionTypes";

const initialState = {
  nfts: [],
  myNfts: [],
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NFTS: {
      return { ...state, nfts: action.payload };
    }
    case SET_MY_NFTS: {
      return { ...state, myNfts: action.payload };
    }
    default:
      return state;
  }
};

export default authorsReducer;
