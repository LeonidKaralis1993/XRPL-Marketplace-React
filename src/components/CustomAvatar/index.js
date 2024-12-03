import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";

const CustomAvatar = React.forwardRef(
  ({ src, alt, phCharLength, children, ...rest }, ref) => {
    const placeHolderChar =
      alt && phCharLength > 0
        ? alt.substr(0, phCharLength).toUpperCase()
        : null;
    // TODO: change src to storage url
    return (
      <Avatar ref={ref} cursor="pointer" src={src} alt={alt} {...rest}>
        {!src && !children && alt ? placeHolderChar : children}
      </Avatar>
    );
  }
);

CustomAvatar.propTypes = {
  phCharLength: PropTypes.number,
};

CustomAvatar.defaultProps = {
  phCharLength: 1,
};

export default CustomAvatar;
