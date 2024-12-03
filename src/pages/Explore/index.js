import React from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import NFTCard from "../../components/NFTCard";
import { useSelector } from "react-redux";

import { nfts } from "../../redux/nftsReducer/selectors";

import Footer from "../../components/Footer";
import CheckboxFilter from "../../components/CheckboxFilter";

const Explore = () => {

  const nftsList = useSelector(nfts);
  const grid = {
    xs: 6,
    sm: 3,
    md: 2,
  };
  return (
  <>
    <Header />
      <Container maxWidth="lg">

              <Typography
                variant="h4"
                component="div"
                sx={{
                  paddingTop: "120px",
                  textAlign: { sm: "center", xs: "left" },
                }}
                color="white"
                fontWeight="800"
              >
                All NFTs
              </Typography>

    <Box
      component="section"
      sx={{
        alignItems: "center",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        paddingBottom: "150px",
        display: "flex",
        flexDirection: "row",
        marginLeft: { lg: "-350px", md: "-110px", sm: "-100px", xs: "-100px" },
      }}
    >
            <CheckboxFilter />
              <Grid
                container
                justifyContent="center"
                spacing={1}
              >
                  {nftsList.map((nftInfo, index) => (
                      <Grid item {...grid} sx={{ margin: "40px" }}>
                        <NFTCard nftInfo={nftInfo} key={index} />
                      </Grid>
                  ))}   
              </Grid>
    </Box>
      </Container>
    <Footer />
    </>
  );
}
export default Explore;
