import React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const CustomElevator = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

CustomElevator.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default CustomElevator;
