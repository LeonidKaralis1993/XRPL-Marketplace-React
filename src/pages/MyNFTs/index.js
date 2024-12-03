import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NFTCard from "../../components/NFTCard";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { myNfts } from "../../redux/nftsReducer/selectors";

const CreateNFT = () => {
  const nftsList = useSelector(myNfts);

  const grid = {
    xs: 12,
    sm: 12,
    md: 4,
  };

  if (!localStorage.getItem("token")) {
    return <Navigate to={"/"} replace />;
  } else {
    return (
      <Box>
        <Header />
        <Typography
          variant="h4"
          sx={{
            borderBottom: "1px solid grey",
            cursor: "default",
            left: "100px",
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic",
            paddingTop: "120px",
            paddingBottom: "40px",
            color: "white",
            fontWeight: "800",
          }}
        >
          My NFTs
        </Typography>

        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingLeft: { lg: "120px", md: "120px", sm: "60px" },
            paddingBottom: "100px",
          }}
        >
          <Grid container justifyContent="center" spacing={5}>
            {nftsList.map((nftInfo, index) => (
              <Grid item {...grid} sx={{ paddingBottom: "40px" }}>
                <NFTCard
                  nftInfo={nftInfo}
                  key={index}
                  actions={false}
                  fetchedData={true}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Box>
    );
  }
};

export default CreateNFT;
