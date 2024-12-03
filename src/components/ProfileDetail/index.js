import React from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SavingsIcon from "@mui/icons-material/Savings";
import InfoIcon from "@mui/icons-material/Info";
import "../style.css";

const ProfileDetail = ({ currentUser, user }) => {
  const [, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <List dense className="profile-list-title">
        <ListItem
          className="pointer"
          onClick={currentUser ? handleClick : undefined}
        ></ListItem>
      </List>
      <Typography className="profile-list-title">
        Personal Information
      </Typography>

      <List dense className="personal-list-root">
        <ListItem>
          <ListItemIcon className="list-icon-root">
            <PermIdentityIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            className="text-color"
            primary="First Name"
            secondary={user.first_name}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className="list-icon-root">
            <InfoIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            className="text-color"
            primary="Bio"
            secondary={user.bio}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon className="list-icon-root">
            <SavingsIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            className="text-color"
            primary="Balance"
            secondary={`${user.balance} XRP`}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ProfileDetail;
