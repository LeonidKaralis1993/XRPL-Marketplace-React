import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchAllAuthors } from "./api/UsersAPI";
import { fetchMyNfts, fetchAllNfts } from "./api/NftsAPI";
import { JWTAuth } from "./api/AuthAPI";

const App = () => {
  const Explore = lazy(() => import("./pages/Explore"));
  const Landing = lazy(() => import("./pages/Landing"));
  const CreateNFT = lazy(() => import("./pages/CreateNFT"));
  const MyNFTs = lazy(() => import("./pages/MyNFTs"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyNfts());
    // TODO: Change fake db to api get authors
    dispatch(fetchAllNfts());
    dispatch(fetchAllAuthors());
    if (localStorage.getItem("wallet")) {
      dispatch(JWTAuth.getAuthWallet());
    }
    // eslint-disable-next-line
  }, [dispatch, localStorage.getItem("wallet")]);

  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/create-nft" element={<CreateNFT />} />
        <Route exact path="/my-nfts" element={<MyNFTs />} />
        <Route exact path="/home" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
