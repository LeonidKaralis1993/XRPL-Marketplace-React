import React, { memo } from "react";
import { useSelector } from "react-redux";
import AuthorCell from "./AuthorCell";
import { authors } from "../../redux/authorsReducer/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AuthorList = () => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 4,
  };

  const currentAuthors = useSelector(authors);

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
            paddingBottom="40px"
            sx={{
              paddingLeft: { md: "0px", xs: "25px" },
              paddingRight: { md: "50px", xs: "25px" },
              textAlign: { sm: "center", xs: "left" },
            }}
            color="white"
            fontWeight="800"
          >
            🚀 Top Sellers
          </Typography>
        </AnimationOnScroll>
        <Grid
          container
          justifyContent="center"
          spacing={10}
          sx={{ paddingTop: "80px" }}
        >
          {currentAuthors
            ? currentAuthors &&
              currentAuthors.map((author, index) => (
                <Grid item {...grid}>
                  <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeInOut"
                    animateOnce={true}
                  >
                    <AuthorCell author={author} />
                  </AnimationOnScroll>
                </Grid>
              ))
            : null}      
        </Grid>
      </Container>
    </Box>
  );
};
export default memo(AuthorList);
