import { axiosJson } from "./AxiosConfig";
import {
  setAuthUser,
  updateLoadUser,
  setCurrentUser,
} from "../redux/authReducer/actions";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/commonReducer/actions";
import { Server } from "../utils";

var axJson = axiosJson();

export const JWTAuth = {
  onGenerateWallet: () => {
    return (dispatch) => {
      try {
        dispatch(fetchStart());
        axJson
          .post(`${Server.endpoint}/wallet`)
          .then(({ data }) => {
            if (data.status_code === 201) {
              localStorage.setItem("token", data.token);
              axJson.defaults.headers.common["Authorization"] =
                "Bearer " + data.token;
              dispatch(JWTAuth.getAuthWallet());
            } else {
              dispatch(fetchError(data.message));
            }
          })
          .catch(function (error) {
            dispatch(fetchError("Faucet fund failed. Try again."));
          });
      } catch (error) {
        dispatch(fetchError("Faucet fund failed. Try again."));
      }
    };
  },
  onLogin: (classicAddress) => {
    return (dispatch) => {
      try {
        dispatch(fetchStart());
        axJson
          .post(
            `${Server.endpoint}/auth/login`,
            JSON.stringify({ classic_address: classicAddress })
          )
          .then(({ data }) => {
            if (data.status_code === 200) {
              localStorage.setItem("token", data.access_token);
              dispatch(JWTAuth.getAuthWallet());
            } else {
              dispatch(fetchError(data.message));
            }
          })
          .catch(function (error) {
            dispatch(fetchError(error));
          });
      } catch (error) {
        dispatch(fetchError(""));
      }
    };
  },
  onLogout: () => {
    return (dispatch) => {
      dispatch(fetchStart());
      localStorage.removeItem("token");
      dispatch(fetchSuccess("Logged Out!"));
      window.location.reload();
    };
  },

  getAuthWallet: (loaded = false, token) => {
    return (dispatch) => {
      if (!token) {
        const token = localStorage.getItem("token");
        axJson.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
      dispatch(fetchStart());
      dispatch(updateLoadUser(loaded));
      axJson
        .get(`${Server.endpoint}/wallet`)
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(fetchSuccess());
            dispatch(setCurrentUser(data.wallet));
            dispatch(setAuthUser(data.wallet));
            // store the user in localStorage
            localStorage.setItem("wallet", JSON.stringify(data.wallet));
            dispatch(updateLoadUser(true));
          } else {
            dispatch(JWTAuth.onLogout());
          }
        })
        .catch(function (error) {
          dispatch(fetchError(""));
        });
    };
  },
};
