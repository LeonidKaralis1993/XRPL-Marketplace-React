import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollToTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const body = document.querySelector("#root");
    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default ScrollToTop;
