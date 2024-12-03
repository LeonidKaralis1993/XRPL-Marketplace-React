import React, { useRef, useState, useEffect } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Banner = () => {
  const firstContainerRef = useRef(null);
  const [firstReveal, setFirstReveal] = useState(false);
  const [secondReveal, setSecondReveal] = useState(false);
  const [thirdReveal, setThirdReveal] = useState(false);
  const [fourthReveal, setFourthReveal] = useState(false);
  const [fifthReveal, setFifthReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstReveal(!firstReveal);
      setTimeout(() => {
        setSecondReveal(!secondReveal);
        setTimeout(() => {
          setThirdReveal(!thirdReveal);
          setTimeout(() => {
            setFourthReveal(!fourthReveal);
            setTimeout(() => {
              setFifthReveal(!fifthReveal);
            }, 650);
          }, 450);
        }, 450);
      }, 450);
    }, 250);
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={5}
        sx={{
          alignItems: "center",
          color: "white",
          p: 0,
          display: "flex",
          paddingLeft: "50px",
          paddingRight: "0px",
          lineHeight: "40px",
          fontSize: "20px",
        }}
      >
        <Grid item md={6} sm={12} xs={12} ref={firstContainerRef}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="rgba(255, 50, 63 ,1)"
            fontWeight="800"
            paddingBottom="50px"
            fontSize="25px"
            textTransform="uppercase"
          >
            Moerphous
          </Typography>
          <Slide
            direction="up"
            in={firstReveal}
            container={firstContainerRef.current}
          >
            <Typography
              variant="h3"
              component="div"
              color="white"
              fontWeight="800"
            >
              Create, Buy or Sell NFTs
            </Typography>
          </Slide>

          <Slide
            direction="up"
            in={secondReveal}
            container={firstContainerRef.current}
          >
            <Box component="p">
              Explore on the world's largest XRPL NFT marketplace.
            </Box>
          </Slide>
          <Slide
            direction="up"
            in={thirdReveal}
            container={firstContainerRef.current}
          >
            <Box>
              <Link underline="none" color="inherit" href="/explore">
                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 50, 63 ,1)",
                    borderRadius: "10px",
                    p: "10px",
                    fontWeight: 800,
                    "&:hover": {
                      color: "#fff",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 50, 63 ,1)",
                      boxShadow: "0 0.5em 0.5em -0.4em red",
                      transform: "translateY(-0.25em)",
                    },
                  }}
                >
                  Explore
                </Button>
              </Link>
            </Box>
          </Slide>

          <Slide
            direction="up"
            in={fourthReveal}
            container={firstContainerRef.current}
          >
            <Grid container spacing={10}>
              <Grid item md={3} sm={6} xs={6}>
                <Box>
                  <Typography
                    paddingTop="20px"
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    2k
                  </Typography>
                  <Typography
                    paddingTop="20px"
                    variant="h6"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Collectibles
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={6}>
                <Box>
                  <Typography
                    paddingTop="20px"
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    500
                  </Typography>
                  <Typography
                    paddingTop="20px"
                    variant="h6"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Artists
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Slide>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box sx={{ height: 180 }}>
            <Fade in={fifthReveal}>
              {
                <Box
                  component="img"
                  elevation={4}
                  className="banner-img"
                  sx={{
                    height: 500,
                    width: 500,
                    top: { lg: -117, md: -89, sm: -39 },
                    position: "relative",
                  }}
                  src="./images/banner.png"
                  alt=""
                />
              }
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Banner;
