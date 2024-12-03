import { combineReducers } from "redux";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import authorsReducer from "./authorsReducer";
import nftsReducer from "./nftsReducer";

const rootReducer = combineReducers({
  commonApp: commonReducer,
  authApp: authReducer,
  authorsApp: authorsReducer,
  nftsApp: nftsReducer,
});

export default rootReducer;
