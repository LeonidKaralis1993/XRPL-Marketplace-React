import React, { memo, useState, useEffect } from "react";
import Box from "@mui/material/Box";

const Timer = ({ endDate }) => {
  const [clockInfo, setClockInfo] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const getLeadingZero = (number) => {
    return number < 10 ? "0" + number : number;
  };
  useEffect(() => {
    getTimeUntil(endDate);
    setInterval(() => getTimeUntil(endDate), 1000);
    // eslint-disable-next-line
  }, []);

  const getTimeUntil = (endDate) => {
    const time = Date.parse(endDate) - Date.parse(new Date());
    if (time < 0) {
      setClockInfo({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setClockInfo({ days, hours, minutes, seconds });
    }
  };
  return (
    <Box
      sx={{
        fontSize: ".9rem",
        width: "125px",
        marginBottom: "12px",
        background: "#fff",
        padding: "6px 10px",
        borderRadius: " 30px",
        border: "2px solid red",
        zIndex: "1",
        color: "#0d0c22",
      }}
    >
      <Box
        sx={{ fontWeight: 700, display: "inline-block", marginRight: "5px" }}
      >
        {getLeadingZero(clockInfo.days)}d
      </Box>
      <Box
        sx={{ fontWeight: 700, display: "inline-block", marginRight: "5px" }}
      >
        {getLeadingZero(clockInfo.hours)}h
      </Box>
      <Box
        sx={{ fontWeight: 700, display: "inline-block", marginRight: "5px" }}
      >
        {getLeadingZero(clockInfo.minutes)}m
      </Box>
      <Box
        sx={{ fontWeight: 700, display: "inline-block", marginRight: "5px" }}
      >
        {getLeadingZero(clockInfo.seconds)}s
      </Box>
    </Box>
  );
};

export default memo(Timer);
