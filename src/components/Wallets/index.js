import React, { memo } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Wallets = () => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 3,
  };

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        borderTop: "2px solid grey",
        paddingTop: "80px",
        paddingLeft: { md: "0px", sm: "10px", xs: "100px" },
        display: "flex",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: { md: "center", xs: "left" },
          paddingTop: "5px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeInOut"
          animateOnce={true}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            paddingTop="80px"
            sx={{
              paddingLeft: { md: "0px", xs: "25px" },
              paddingRight: { md: "50px", lg: "50px" },
              textAlign: { sm: "center", xs: "left" },
            }}
            color="white"
            fontWeight="800"
          >
            Wallets
          </Typography>
        </AnimationOnScroll>
        <Grid
          container
          justifyContent="center"
          spacing={10}
          sx={{ paddingTop: "100px" }}
        >
          <Grid item {...grid}>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeInOut"
              animateOnce={true}
            >
              <Card
                sx={{
                  color: "grey",
                  backgroundColor: "rgba(33,36,40,1)",
                  border: "2px solid green",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="./images/metamask.png"
                    alt="metamask"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Metamask
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>
          <Grid item {...grid}>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeInOut"
              animateOnce={true}
            >
              <Card
                sx={{
                  color: "grey",
                  backgroundColor: "rgba(33,36,40,1)",
                  border: "2px solid green",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="./images/coinbase.png"
                    alt="coinbase"
                  />
                  <CardContent background="transparent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Coinbase
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>

          <Grid item {...grid}>
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeInOut"
              animateOnce={true}
            >
              <Card
                sx={{
                  color: "grey",
                  backgroundColor: "rgba(33,36,40,1)",
                  border: "2px solid green",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="./images/bitski.png"
                    alt="Bitski"
                  />
                  <CardContent background="transparent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Bitski
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </AnimationOnScroll>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default memo(Wallets);
