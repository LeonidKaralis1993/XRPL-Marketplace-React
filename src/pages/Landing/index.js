import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Authors from "../../components/Authors";
import Footer from "../../components/Footer";
import Wallets from "../../components/Wallets";
import Collections from "../../components/Collections";
import Info from "../../components/Info";
import Box from "@mui/material/Box";

const Landing = (handleDrawerToggle) => {
  return (
    <Box>
      <Header />
      <Box
        component="section"
        sx={{
          alignItems: "center",
          color: "grey",
          backgroundColor: "rgba(33,36,40,1)",
          //paddingLeft: { md: "250px", sm: "100px", xs: "150px" },
          display: "flex",
          paddingTop: "250px",
          paddingBottom: "104px",
          background: `url(${"./images/background.jpg"}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <Banner />
      </Box>
      <Wallets />
      <Info />
      <Collections />
      <Authors />
      <Footer />
    </Box>
  );
};

export default Landing;
