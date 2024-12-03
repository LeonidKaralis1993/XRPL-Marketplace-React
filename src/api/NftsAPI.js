import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/commonReducer/actions";
import { setMynfts, setNfts } from "../redux/nftsReducer/actions";
import { axiosJson } from "./AxiosConfig";

import { Server } from "../utils";

var axJson = axiosJson();

export const mintNFT = (nftInfo) => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (localStorage.getItem("wallet")) {
      axJson.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axJson
        .post(
          `${Server.endpoint}/nft/upload-mint-nft`,
          JSON.stringify({
            picture: nftInfo.base64_image_url,
            author_avatar: nftInfo.author_avatar,
            title: nftInfo.title,
            price: nftInfo.price,
          })
        )
        .then(({ data }) => {
          if (data.status_code === 200) {
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

export const fetchMyNfts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    if (localStorage.getItem("wallet")) {
      axJson.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axJson
        .get(`${Server.endpoint}/nft/get-wallet-nfts`)
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(setMynfts(data.results));
            dispatch(fetchSuccess());
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

export const fetchAllNfts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
      axJson
        .get(`${Server.endpoint}/nft/get-all`)
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(setNfts(data.results));
            dispatch(fetchSuccess());
          } else {
            dispatch(fetchError(data.message));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(""));
        });
  };
};


