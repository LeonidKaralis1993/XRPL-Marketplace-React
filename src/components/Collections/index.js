import React, { memo } from "react";
import { useSelector } from "react-redux";

import { nfts } from "../../redux/nftsReducer/selectors";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NFTCard from "../NFTCard";

import { Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Collections = () => {
  const nftsList = useSelector(nfts);
  const grid = {
    xs: 12,
    sm: 6,
    md: 4,
  };

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        paddingTop: "50px",
        paddingBottom: "150px",
        paddingLeft: { md: "0px", sm: "0px", xs: "80px" },
        display: "flex",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: { md: "center", xs: "left" },
          paddingTop: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            paddingLeft: { md: "0px", xs: "25px" },
            paddingRight: { md: "50px", xs: "25px" },
            textAlign: { sm: "center", xs: "left" },
          }}
          color="white"
          fontWeight="800"
        >
          🔥 Hot Collections
        </Typography>

        <Grid
          container
          justifyContent="center"
          spacing={1}
          sx={{
            paddingLeft: { md: "120px", sm: "80px", xs: "15px" },
            paddingTop: "80px",
          }}
        >
          <Swiper
            spaceBetween={5}
            scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 3,
              },
            }}
            className="swiper-portfolio s1"
            modules={[Scrollbar, A11y, Autoplay]}
            loop
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2500}
          >
            {nftsList.map((nftInfo, index) => (
              <SwiperSlide>
                <Grid item {...grid} sx={{ paddingBottom: "40px" }}>
                  <NFTCard nftInfo={nftInfo} key={index} />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>    
        </Grid>
      </Container>
    </Box>
  );
};
export default memo(Collections);
