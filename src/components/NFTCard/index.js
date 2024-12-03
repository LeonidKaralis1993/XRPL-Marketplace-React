import React, { memo } from "react";
import Timer from "../Timer";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CustomAvatar from "../CustomAvatar";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const NftCard = ({ nftInfo, actions = true, fetchedData = false }) => {
  return (
    <Card
      sx={{
        display: "flex",
        padding: "15px",
        paddingTop: "0px",
        margin: "90px 0px -25px",
        width: "220px",
        height: "320px",
        cursor: "none",
        border: "2px solid green",
        borderRadius: "20px",
        "&:hover": {
          boxShadow: "0 0.5em 0.5em -0.1em green",
          transform: "translateY(-0.25em)",
        },
        backgroundColor: "rgba(33,36,40,1)",
      }}
    >
      <CardActionArea alignItems="center">
        <CardMedia component="Box" height="200">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              margin: "10px 10px 25px",
            }}
          >
            {nftInfo.end_date && (
              <Box
                sx={{
                  fontSize: ".8rem",
                  position: "absolute",
                  left: "43px",
                  padding: "6px 10px",
                  Zindex: "1",
                  color: "#0d0c22",
                }}
              >
                <Timer endDate={nftInfo.end_date} />
              </Box>
            )}
            <Box
              sx={{
                cursor: "pointer",
                position: "absolute",
                width: "50px",
                height: "auto",
                borderRadius: "100% !important",
                zIndex: "1",
              }}
            >
              <Link href={nftInfo.author_url} target="_blank">
                <CustomAvatar
                  size={56}
                  src={nftInfo.author_avatar}
                  alt=""
                  sx={{ border: "2px solid red" }}
                />
              </Link>
            </Box>
            {actions ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "170px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                  justifyContent: "center",
                }}
                src={nftInfo.image_url}
                alt=""
              />
            ) : fetchedData ? (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "170px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                  justifyContent: "center",
                }}
                src={nftInfo.image_url}
                alt=""
              />
            ) : (
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "170px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  justifyContent: "center",
                }}
                src={nftInfo.image_url.preview}
              />
            )}
          </Box>
        </CardMedia>
        <CardContent>
          <Box
            sx={{
              lineHeight: "28px",
              position: "absolute",
              bottom: "10px",
              color: "#fff",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: actions ? "45px" : "35px",
              }}
              component="h3"
            >
              {nftInfo.title}
            </Box>
            {nftInfo.status === "has_offers" ? (
              <Box
                component="span"
                sx={{
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {nftInfo.price} XRP
              </Box>
            ) : (
              <Box
                component="span"
                sx={{
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {nftInfo.price} XRP{" "}
                {nftInfo.status === "on_auction" && (
                  <Box component="span">
                    {nftInfo.bid}/{nftInfo.max_bid}
                  </Box>
                )}
              </Box>
            )}
            <Box
              sx={{
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {actions ? (
                <Box
                  component="button"
                  sx={{
                    cursor: "pointer",
                    right: "0px",
                    color: "white",
                    backgroundColor: "rgba(255, 50, 63 ,1)",
                    borderRadius: "10px",
                    border: "1px",
                    p: "5px",
                    px: "15px",
                    mr: "10px",
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
                  {nftInfo.status === "on_auction" ? "Place Bid" : "Buy Now"}
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {actions ? (
            <Box
              sx={{
                position: "absolute",
                fontSize: "18px",
                fontWeight: 800,
                color: "#fff",
                bottom: "23px",
                right: "10px",
              }}
            >
              <ThumbUpIcon
                sx={{
                  mr: 2,
                  height: "50px",
                  my: "-18px",
                  "& > *": {
                    color: "rgba(255, 50, 63 ,1)",
                    "&:hover": {
                      color: "rgba(255, 50, 63 ,1)",
                      transform: "translateY(-0.25em)",
                    },
                  },
                }}
              />
              <Box
                component="span"
                sx={{
                  fontSize: "16px",
                  fontWeight: 800,
                }}
              >
                {nftInfo.likes}
              </Box>
            </Box>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(NftCard);
