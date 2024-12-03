import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
const PageLoader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        opacity: 0.6,
        left: "0px",
        top: "0px",
        borderRadius: "5px",
        zIndex: 1030,
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "grey",
        color: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: "white",
        }}
      />
    </Box>
  );
};

export default PageLoader;
