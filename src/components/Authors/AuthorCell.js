import React, { memo } from "react";
import Box from "@mui/material/Box";
import CustomMediaObject from "../CustomMediaObject";
import CustomAvatar from "../CustomAvatar";

const AuthorCell = ({ author }) => {
  const backgroundColors = ["#1735E3", "green", "blue"];
  return (
    <CustomMediaObject
      avatar={
        <CustomAvatar
          size={56}
          src={author.profile_picture ? author.profile_picture : "Anonymous"}
          alt={author.first_name ? author.first_name : "Anonymous"}
        />
      }
      title={author.first_name ? author.first_name : "Anonymous"}
      titleProps={{
        variant: "h4",
        fontSize: 14,
        color: "white",
      }}
      // TODO: subTitle={`${author.author_sales} XRP`}
      subTitleProps={{
        variant: "body2",
        fontSize: 12,
        letterSpacing: 0.4,
        color: "grey",
      }}
      sx={{
        padding: "8px 24px",
        cursor: "pointer",
        transition: "all .2s",
        width: "230px",
        display: "flex",
        borderTop: "1px solid green",
        "&:last-child": {
          borderBottom: "1px solid green",
        },
        "&:hover": {
          borderTop: "none",
          color: "black",
          transform: "translateY(-4px)",
          boxShadow: "0 5px 10px 0 green",
        },
      }}
      actionsComponent={
        <Box display="flex" alignItems="center">
          <Box
            sx={{
              color: "#fff",
              py: 1,
              px: 2,
              mx: 4,
              my: 1,
              fontSize: 12,
              width: 42,
              backgroundColor: backgroundColors[Math.floor(Math.random() * 3)],
              borderRadius: "16px",
            }}
          >{`${author.nb_items} nfts`}</Box>
        </Box>
      }
    />
  );
};

export default memo(AuthorCell);
