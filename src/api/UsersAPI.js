import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/commonReducer/actions";
import { setCurrentUser } from "../redux/authReducer/actions";
import { axiosJson, axiosFiles } from "./AxiosConfig";

import { setAuthors } from "../redux/authorsReducer/actions";
import { Server } from "../utils";
import { JWTAuth } from "./AuthAPI";

var axFiles = axiosFiles();
var axJson = axiosJson();

export const SetPersonalInfo = ({ firstName, bio }, onCloseDialog) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (localStorage.getItem("wallet")) {
      axJson.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axJson
        .put(
          `${Server.endpoint}/wallet/info`,
          JSON.stringify({
            first_name: firstName,
            bio: bio,
          })
        )
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(fetchSuccess(data.message));
            const wallet = JSON.parse(localStorage.getItem("wallet"));
            wallet.first_name = firstName;
            wallet.bio = bio;
            dispatch(setCurrentUser(wallet));
            localStorage.setItem("wallet", JSON.stringify(wallet));
            dispatch(JWTAuth.getAuthWallet());
            dispatch(onCloseDialog());
          } else {
            dispatch(fetchError(data.message));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(""));
        });
    }
  };
};

export const uploadPicture = (image) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("file", image);
    dispatch(fetchStart());
    const token = localStorage.getItem("token");
    if (token) {
      axFiles.defaults.headers.common["Authorization"] = "Bearer " + token;
      axFiles
        .put(`${Server.endpoint}/wallet/image`, formData)
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(JWTAuth.getAuthWallet());
            dispatch(fetchSuccess(data.message));
          } else {
            dispatch(fetchError(data.message));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(""));
        });
    }
  };
};

export const fetchAllAuthors = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axJson.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axJson
      .get(`${Server.endpoint}/wallet/all`)
      .then(({ data }) => {
        console.log(data)
        if (data.status_code === 200) {
          dispatch(fetchSuccess());
          dispatch(setAuthors(data.wallets))
        } else {
          dispatch(fetchError(data.message));
        }
      })
      .catch(function (error) {
        dispatch(fetchError(""));
      });
  };
};
