import React, { memo } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SellIcon from "@mui/icons-material/Sell";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Info = () => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3,
  };

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        paddingTop: "150px",
        paddingLeft: { lg: "0px", md: "70px", sm: "10px", xs: "70px" },
        paddingRight: { lg: "260px", md: "30px" },
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
            sx={{
              paddingBottom: "140px",
              paddingLeft: { sm: "0px", md: "30px", lg: "255px" },
              paddingRight: { md: "30px", lg: "0px" },
              textAlign: { sm: "center", xs: "left" },
            }}
            color="white"
            fontWeight="800"
          >
            Create, Buy or Sell NFTs on the XRPL
          </Typography>
        </AnimationOnScroll>
        <Grid
          container
          justifyContent="center"
          spacing={{ lg: 50, md: 20, sm: 20, xs: 20 }}
          sx={{
            paddingBottom: "150px",
            marginRight: { md: "130px", lg: "0px" },
          }}
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
                  display: "flex",
                  width: "310px",
                  height: "200px",
                }}
              >
                <CardActionArea alignItems="center">
                  <CardMedia component="Box" height="200">
                    <AccountBalanceWalletIcon
                      sx={{
                        cursor: "pointer",
                        padding: "40px",
                        paddingTop: "0px",
                        position: "relative",
                        height: "60px",
                        width: "60px",
                        marginLeft: "70px",
                        left: "10px",
                        top: "25px",
                        "& > *": {
                          color: "#fff",
                          opacity: "1",
                        },
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Connect Your Wallet
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="span"
                      textAlign="center"
                      component="div"
                      color="#5dea5d"
                      fontWeight="800"
                    >
                      Register to our platform using your wallet.
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
                  width: "310px",
                  height: "200px",
                }}
              >
                <CardActionArea alignItems="center">
                  <CardMedia component="Box" height="200">
                    <LibraryAddIcon
                      sx={{
                        cursor: "pointer",
                        padding: "40px",
                        paddingTop: "0px",
                        position: "relative",
                        height: "60px",
                        width: "60px",
                        marginLeft: "70px",
                        left: "10px",
                        top: "25px",
                        "& > *": {
                          color: "#fff",
                          opacity: "1",
                        },
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Create Your Collections
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="span"
                      textAlign="center"
                      component="div"
                      color="#5dea5d"
                      fontWeight="800"
                    >
                      Use our create page to create your NFTs.
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
                  width: "310px",
                  height: "200px",
                }}
              >
                <CardActionArea alignItems="center">
                  <CardMedia component="Box" height="200">
                    <SellIcon
                      sx={{
                        cursor: "pointer",
                        padding: "40px",
                        paddingTop: "0px",
                        position: "relative",
                        height: "60px",
                        width: "60px",
                        marginLeft: "70px",
                        left: "10px",
                        top: "25px",
                        "& > *": {
                          color: "#fff",
                          opacity: "1",
                        },
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Sell Your Collections
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="span"
                      textAlign="center"
                      component="div"
                      color="#5dea5d"
                      fontWeight="800"
                    >
                      Submit your collections to get listed.
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
export default memo(Info);
