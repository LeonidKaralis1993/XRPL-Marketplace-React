import React, { isValidElement, memo } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomAvatar from "../CustomAvatar";

const CustomMediaObject = ({
  avatar,
  avatarProps,
  onBodyClick,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  actionsComponent,
  footerComponent,
  footerComponentProps,
  ...rest
}) => {
  return (
    <Box
      sx={{ position: "relative", display: "flex", alignItems: "flex-start" }}
      {...rest}
    >
      {avatar && (
        <Box sx={{ alignItems: "center" }}>
          <Box mr={3}>
            {isValidElement(avatar) ? (
              avatar
            ) : (
              <CustomAvatar
                sx={{ height: 60, width: 60 }}
                src={avatar}
                {...avatarProps}
              />
            )}
          </Box>
        </Box>
      )}
      <Box sx={{ flex: "1 1 0%" }} onClick={onBodyClick}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography {...titleProps}>{title}</Typography>
            <Typography {...subTitleProps}>{subTitle}</Typography>
          </Box>
          {actionsComponent && (
            <Box sx={{ alignSelf: "flex-start" }}>{actionsComponent}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

CustomMediaObject.prototype = {
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  avatarProps: PropTypes.object,
  onBodyClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  actionsComponent: PropTypes.element,
};

CustomMediaObject.defaultProps = {
  avatar: "",
  title: "",
  titleProps: {
    variant: "h3",
    component: "Box",
  },
  subTitle: "",
  subTitleProps: {
    component: "Box",
  },
};

export default memo(CustomMediaObject);
