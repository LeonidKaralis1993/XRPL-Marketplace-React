import React, { memo } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { categories, status } from "../../constants/filters";

const CheckboxFilter = () => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6,
  };

  const [categoryStates, setCategoryStates] = React.useState({
    art: true,
    music: false,
    collectibles: false,
    sports: false,
  });

  const [statusStates, setStatusStates] = React.useState({
    buyNow: true,
    onAuction: false,
    hasOffers: false,
  });

  const handleChangeCategoryStates = (event) => {
    setCategoryStates({
      ...categoryStates,
      [event.target.name]: event.target.checked,
    });
    //TODO: dispatch redux action
  };

  const handleChangeStatusStates = (event) => {
    setStatusStates({
      ...statusStates,
      [event.target.name]: event.target.checked,
    });
    //TODO: dispatch redux action
  };

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        spacing={0}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item {...grid}>
          <FormControl
            component="fieldset"
            variant="standard"
            sx={{
              color: "grey",
              backgroundColor: "rgba(33,36,40,1)",
              border: "1px solid grey",
              borderRadius: "20px",
              m: 5,
              ml: 15,
              p: 5,
              width: "200px",
            }}
          >
            <FormLabel
              component="legend"
              sx={{ color: "white", fontWeight: 800, fontSize: "20px" }}
            >
              Categories
            </FormLabel>
            <FormGroup>
              {categories.map((item, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categoryStates[item.value]}
                      onChange={handleChangeCategoryStates}
                      name={item.value}
                    />
                  }
                  label={item.label}
                  key={index}
                  sx={{
                    "& .Mui-checked": {
                      color: "rgba(255, 50, 63 ,1)",
                    },
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item {...grid}>
          <FormControl
            component="fieldset"
            variant="standard"
            sx={{
              color: "grey",
              backgroundColor: "rgba(33,36,40,1)",
              border: "1px solid grey",
              borderRadius: "20px",
              m: 5,
              ml: 15,
              p: 5,
              width: "200px",
            }}
          >
            <FormLabel
              component="legend"
              sx={{ color: "white", fontWeight: 800, fontSize: "20px" }}
            >
              Status
            </FormLabel>
            <FormGroup>
              {status.map((item, index) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={statusStates[item.value]}
                      onChange={handleChangeStatusStates}
                      name={item.value}
                    />
                  }
                  label={item.label}
                  key={index}
                  sx={{
                    "& .Mui-checked": {
                      color: "rgba(255, 50, 63 ,1)",
                    },
                  }}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default memo(CheckboxFilter);
