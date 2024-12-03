import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import GridContainer from "../GridContainer";
import Grid from "@mui/material/Grid";
import AppTextInput from "../AppTextInput";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ContentLoader from "../ContentLoader";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PersonIcon from "@mui/icons-material/Person";
import { SetPersonalInfo } from "../../api/UsersAPI";
import "./style.css";

const EditPersonalInformation = ({ open, onCloseDialog }) => {
  const [personalInfoValues, setPersonalInfoValues] = useState({
    firstName: "",
    bio: "",
  });

  const [errorValues, setErrorValues] = useState({
    firstNameError: "",
    bioError: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    const { firstName, bio } = personalInfoValues;

    if (!firstName) {
      setErrorValues({
        ...errorValues,
        firstNameError: "This field is required!",
      });
    } else if (!bio) {
      setErrorValues({
        ...errorValues,
        bioError: "This field is required!",
      });
    } else {
      dispatch(SetPersonalInfo({ firstName, bio }, onCloseDialog));
    }
  };

  return (
    <Dialog open={open} onClose={onCloseDialog} className="dialog-root">
      <DialogTitle className="dialog-title-root">
        Edit Personal Information.
      </DialogTitle>
      <DialogContent dividers>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          mb={{ xs: 6, md: 5 }}
          mt={{ xs: 6, md: 5 }}
          ml={4}
        >
          <GridContainer>
            <Grid item xs={12} md={5.8}>
              <AppTextInput
                fullWidth
                variant="standard"
                label="First Name"
                sx={{
                  paddingLeft: "10px",
                  color: "#fff",
                  backgroundColor: "#fff",
                  ".MuiFormLabel-root": {
                    color: "#000",
                    fontWeight: 800,
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                  },
                }}
                value={personalInfoValues.firstName}
                onChange={(e) => {
                  setPersonalInfoValues({
                    ...personalInfoValues,
                    firstName: e.target.value,
                  });
                  setErrorValues({ ...errorValues, firstNameError: "" });
                }}
                helperText={errorValues.firstNameError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start" variant="standard">
                      <IconButton aria-label="First Name" edge="end" disabled>
                        <PermIdentityIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={5.8}>
              <AppTextInput
                fullWidth
                variant="standard"
                label="Bio"
                sx={{
                  paddingLeft: "10px",
                  color: "#fff",
                  backgroundColor: "#fff",
                  ".MuiFormLabel-root": {
                    color: "#000",
                    fontWeight: 800,
                    paddingLeft: "10px",
                    paddingBottom: "10px",
                  },
                }}
                value={personalInfoValues.bio}
                onChange={(e) => {
                  setPersonalInfoValues({
                    ...personalInfoValues,
                    bio: e.target.value,
                  });
                  setErrorValues({ ...errorValues, bioError: "" });
                }}
                helperText={errorValues.bioError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start" variant="standard">
                      <IconButton aria-label="Bio" edge="end" disabled>
                        <PersonIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </GridContainer>
        </Box>
        <Box display="flex" justifyContent="flex-end" mb={0}>
          <Button onClick={onCloseDialog} color="secondary">
            Cancel
          </Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
      <ContentLoader variant="info" />
    </Dialog>
  );
};

EditPersonalInformation.prototype = {
  open: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func,
};

export default EditPersonalInformation;
